'use client'
import { User } from "@/props/componentProps"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils";

const sidebarLinks=[ {
    imgURL: "/icons/home.svg",
    route: "/home",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/myBanks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },];


const Sidebar = ({user}) => {
    const location =useLocation()
    const{pathname}=location
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
          <Link to="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <img src="/vite.svg" width={34} height={34} alt="vite logo" className="w-6 h-6 max-xl:size-14"/>
          <h1 className="sidebar-logo">Bank</h1>
          </Link>
          {sidebarLinks.map((item)=>{
            const isActive = pathname ===item.route || pathname.startsWith(`${item.route}/`)
            return( 
                <Link to={item.route} key ={item.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
                    <div className="relative size-6">
                       <img src={item.imgURL} alt={item.label} className={cn({'brightness-[3] invert-0':isActive})} />
                    </div>
                    <p className={cn('sidebar-label',{'!text-white':isActive})} >{item.label}</p>
                </Link>
            )
          })}

          USER
        </nav>
      FOOTER
    </section>
  )
}

Sidebar.propTypes = User

export default Sidebar
