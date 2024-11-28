import { recentTransactionProps } from "@/props/componentProps"
import { Link } from "react-router-dom"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { BankTabItem } from "./BankTabItem"
// import {BankInfo } from "./BankInfo"
// import {TransactionTable } from "./TransactionTable"


const RecentTransaction = ({accounts,transactions=[],appwriteItemId,page =1,}) => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactionn-label">
             Recent transaction
        </h2>
        <Link to={`/transaction-history`} className="view-all-btn">
        View all
        </Link>
      </header>
      {/* <Tabs defaultValue={appwriteItemId} className="w-full">
  <TabsList className="recent-transactions-tablist">
    {accounts.map((account)=>(
        <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem key={account.id} account={account} appwriteItemId={appwriteItemId}/>
        </TabsTrigger>
    )

    )}
  </TabsList>
   {acccounts.map((account)=>(
   <TabsContent value={account.appwriteItemId}
   key={account.id}
   className="space-y-4">
   <BankInfo  account={account}
   appwriteItemId={appwriteItemId}
   type="full"/>
   <TransactionTable transaction={transaction}/>
   </TabsContent>
    ))}
</Tabs> */}

    </section>
  )
}

RecentTransaction.propTypes = recentTransactionProps

export default RecentTransaction
