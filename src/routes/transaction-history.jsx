import HeaderBox from "@/components/HeaderBox"
import TransactionTable from "@/components/TransactionTable"
import { transactionData } from "../lib/transaction_data";
// import { searchParamProps } from "@/props/componentProps"


const TransactionHistory = () => {
  return (
    <div className="transactions">
      <div className="transactions-header">
       <HeaderBox title="Transaction History" subtext="See your bank details and transactions."/>

      </div>
      <div className="space-y-6">
        <div className="transactions-account">
            <div className="flex flex-col gap-2">
               <h2 className="text-18 font-bold text-white">account data name</h2>
               <p className="text-14 text-blue-50"> account data official name</p>
               <p className="text-14 font-semibold tracking-[1.1px] text-white">
            ●●●● ●●●● ●●●● 0000
            </p>
            </div>
            <div className="transactions-account-balance">
               <p className="text-14">Current Balance</p>
               <p className="text-24 text-center font-bold">12345667</p>
            </div>

        </div>
        <section className="flex w-full flex-col gap-6">
             <TransactionTable transactions={transactionData.transactions}/>
        </section>

      </div>
    </div>
  )
}

// TransactionHistory.propTypes =searchParamProps

export default TransactionHistory
