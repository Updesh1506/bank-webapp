import { recentTransactionProps } from "@/props/componentProps";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "./BankInfo";
import TransactionTable from "./TransactionTable";
import { transactionData } from "@/lib/transaction_data";

const RecentTransaction = ({ transactions, accounts, page = 1 }) => {
  const { appwriteItemId } = transactionData;
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactionn-label">Recent transaction</h2>
        <Link to={`/transaction-history`} className="view-all-btn">
          View all
        </Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account) => (
            <TabsTrigger key={account.id} value={account.bankId}>
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account) => (
          <TabsContent
            value={account.bankId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              appwriteItemId={appwriteItemId}
              type="full"
            />
            <TransactionTable transactions={transactions} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

RecentTransaction.propTypes = recentTransactionProps;

export default RecentTransaction;
