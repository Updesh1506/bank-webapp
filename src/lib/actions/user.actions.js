import {
  createBankAccountProps,
  exchangePublicTokenProps,
} from "@/props/componentProps";
import { plaidClient } from "../plaid";
import { ProcessorTokenCreateRequestProcessorEnum } from "plaid";
import { encryptId } from "../utils";
import { useNavigate } from "react-router-dom";
//import { addFundingSource } from "./dwolla.actions";

/*const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;*/

export const createLinkToken = async (user) => {
  try {
    const tokenParams = {
      user: {
        client_user_id: user.$id,
      },
      client_name: user.name,
      products: ["auth"], // No need for type casting in JavaScript
      language: "en",
      country_codes: ["IN"], // Changed to India country code
    };

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return JSON.stringify({ linkToken: response.data.link_token });
  } catch (error) {
    console.error("Error creating link token:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

export const createBankAccount = async ({
  userId,
  bankId,
  accountId,
  accessToken,
  fundingSourceUrl,
  sharableId,
}) => {
  try {
    const { database } = await createAdminClient();
    const bankAccount = await database.createDocument(
      DATABASE_ID,
      BANK_COLLECTION_ID,
      ID.unique(),
      {
        userId,
        bankId,
        accountId,
        accessToken,
        fundingSourceUrl,
        sharableId,
      },
    );
    return JSON.stringify(bankAccount);
  } catch (error) {
    console.log(error);
  }
};

createBankAccount.propTypes = createBankAccountProps;

export const exchangePublicToken = async ({ publicToken, user }) => {
  const navigate = useNavigate;
  try {
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });
    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountsResponse.data.accounts[0];

    const request = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: ProcessorTokenCreateRequestProcessorEnum.Dwolla,
    };

    const processorTokenResponse =
      await plaidClient.processorTokenCreate(request);
    const processorToken = processorTokenResponse.data.processor_token;

    const fundingSourceUrl = await addFundingSource({
      dwollaCustomerId: user.dwollaCustomerId,
      processorToken,
      bankName: accountData.name,
    });

    if (!fundingSourceUrl) throw Error;

    await createBankAccount({
      userId: user.$id,
      bankId: itemId,
      accountId: accountData.account_id,
      accessToken,
      fundingSourceUrl,
      sharableId: encryptId(accountData.account_id),
    });

    navigate("/");

    return JSON.stringify({
      publicTokenExchange: "complete",
    });
  } catch (error) {
    console.log("An error occured while creating exchanging token:", error);
  }
};

exchangePublicToken.propTypes = exchangePublicTokenProps;
