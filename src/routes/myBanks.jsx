import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";

const MyBanks = () => {
  const account = {
    name: "Shashwat",
    id: 1,
    currentBalance: 142490,
  };

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
            <BankCard account={account} userName={userName} showBalance={showBalance}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
