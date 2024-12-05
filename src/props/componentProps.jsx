import PropTypes from "prop-types";

export const headerBoxProps = {
    type: PropTypes.oneOf(['title', 'subtitle']),
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string,
    user: PropTypes.object.isRequired,
  };



  export const totalBalanceBoxProps = {
    accounts: PropTypes.arrayOf(PropTypes.string), // Array of strings for account names
    totalBanks: PropTypes.number.isRequired,      // Total number of banks (number)
    totalCurrentBalance: PropTypes.number.isRequired, // Total balance in numbers
};

export const animatedCounter ={
    amount: PropTypes.number.isRequired,
}

export const doughnutChart = {
    accounts: PropTypes.arrayOf(PropTypes.number).isRequired,  // Ensures that `accounts` is an array of numbers and is required
  };


  export const User ={
    $id:PropTypes.string,
    email: PropTypes.string,
    userId: PropTypes.string,
    dwollaCustomerUrl: PropTypes.string,
    dwollaCustomerId: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address1:PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    dateOfBirth: PropTypes.string,
    ssn: PropTypes.string,
  }

  export const mobileNavProps={
    user: User
  }

  export const rightSidebarProps={
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    banks: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          balance: PropTypes.number.isRequired,
        }),
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          accountNumber: PropTypes.string.isRequired,
        }),
      ])
    ).isRequired,
  }

  export const bankCardProps={
    account: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
    userName: PropTypes.string.isRequired,
    showBalance: PropTypes.bool,
  };

  export const recentTransactionProps={
    accounts: PropTypes.array.isRequired,
  transactions: PropTypes.array,
  appwriteItemId: PropTypes.string.isRequired,
  page: PropTypes.number,
  }

  export const bankTabItemProps={
    accounts: PropTypes.array.isRequired,
    appwriteItemId: PropTypes.string.isRequired,
  }

  export const bankInfoProps={
    accounts: PropTypes.array.isRequired,
    appwriteItemId: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["full", "card"]).isRequired,
  }

  export const transactionTableProps={
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ).isRequired,
  }

  export const categoryBadgeProps={
    category: PropTypes.string.isRequired,
  }

  export const searchParamProps={
    params: PropTypes.objectOf(PropTypes.string).isRequired,
    searchParams: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.undefined,
      ])
    ).isRequired,
  }

  export const plaidLinkProps = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired, // Example properties; adjust based on your User type
      email: PropTypes.string.isRequired,
    }).isRequired,
    variant: PropTypes.oneOf(["primary", "ghost"]),
    dwollaCustomerId: PropTypes.string,
  };

  export const exchangePublicTokenProps = {
    publicToken: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired, // Assuming `User` is an object; adjust as necessary
  };

  export const addFundingSourceProps={
    dwollaCustomerId: PropTypes.string.isRequired,
    processorToken: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
  }

  export const newDwollaCustomerProps={
    firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  ssn: PropTypes.string.isRequired,
  }

  export const transferComponentprops={
    sourceFundingSourceUrl: PropTypes.string.isRequired,
    destinationFundingSourceUrl: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }

  export const createBankAccountProps={
    accessToken: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  accountId: PropTypes.string.isRequired,
  bankId: PropTypes.string.isRequired,
  fundingSourceUrl: PropTypes.string.isRequired,
  shareableId: PropTypes.string.isRequired,
  }