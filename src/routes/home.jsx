import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import RecentTransaction from "@/components/RecentTransaction";

const Home = () => {
    const loggedIn={firstName:'Shashwat', lastName:'Randi', email: 'shashwatrandi123@gmail.com'};
    return (
     <section className="home">
        <div className="home-content">
            <header className="home-header">
               <HeaderBox
               type="greeting"
               title="Welcome"
               // user={loggedIn?.firstName || 'Guest'}
               user={loggedIn?.firstName && loggedIn?.lastName ? `${loggedIn.firstName} ${loggedIn.lastName}` : 'Guest'}
               subtext="Access and manage your account and transaction efficiently."/>

               <TotalBalanceBox
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}
               />
            </header>
            <RecentTransaction/>
        </div>
        <RightSidebar
        user={loggedIn} 
        transactions={[]}
        banks={[{currentBalance:123},{currentBalance:1123.23}]}
        />
     </section>
    );
  };
  
  export default Home;
  
