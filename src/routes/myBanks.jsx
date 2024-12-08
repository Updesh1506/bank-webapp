import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { bankIdAtom } from "@/jotai/atoms";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const MyBanks = () => {
  const account = {
    name: "Shashwat",
    id: 1,
    currentBalance: 142490,
  };

  const { userId, isSignedIn } = useAuth();
  const { user } = useUser();
  const [accounts, setAccounts] = useState([]);
  const [totalBanks, setTotalBanks] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [bankIdAt, setBankIdAtom] = useAtom(bankIdAtom);

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const getBankDetails = async () => {
      const res = await axios.get(`${apiUrl}/bank/getAccounts`, {
        params: { userId: userId },
      });
      setAccounts(res.data.accounts);
      setTotalBanks(res.data.totalBanks);
      setCurrentBalance(res.data.totalCurrentBalance);
      setBankIdAtom(res.data.accounts[0].bankId);
    };
    getBankDetails();
  }, [userId]);

  const userName = "shashwat";

  const showBalance = true;
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Banks Accounts"
          subtext="Effortlessly manage your banking activities."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {isSignedIn &&
              accounts?.map((account) => {
                return (
                  <BankCard
                    account={account}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={account.currentBalance}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
