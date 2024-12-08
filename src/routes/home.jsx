import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import RecentTransaction from "@/components/RecentTransaction";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useAtom } from "jotai";
import { bankIdAtom } from "@/jotai/atoms";

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const [totalBanks, setTotalBanks] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [bankIdAt, setBankIdAtom] = useAtom(bankIdAtom);

  const { userId, isSignedIn } = useAuth();
  const { user } = useUser();

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

    //const transactions = await axios.get()
    getBankDetails();
  }, [userId]);

  useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get(`${apiUrl}/bank/getAccount`, {
        params: {
          bankId: bankIdAt,
        },
      });
      setTransactions(res.data.transactions);
    };
    getAccount();
  }, [bankIdAt]);

  const loggedIn = {
    firstName: user?.firstName || "Guest",
    lastName: user?.lastName || "",
    email: user?.emailAddresses[0].emailAddress || "guest@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={isSignedIn ? `${user.firstName} ${user.lastName}` : "Guest"}
            subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={accounts}
            totalBanks={totalBanks}
            totalCurrentBalance={currentBalance}
          />
        </header>
        {transactions && (
          <RecentTransaction
            transactions={transactions}
            accounts={accounts}
            page={1}
          />
        )}
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123 }, { currentBalance: 1123.23 }]}
      />
    </section>
  );
};

export default Home;
