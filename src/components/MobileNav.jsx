'use client'
import { mobileNavProps } from "@/props/componentProps"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils";
  
const sidebarLinks=[ {
    imgURL: "/vite.svg",
    route: "/home",
    label: "Home",
  },
  {
    imgURL: "/vite.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/vite.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/vite.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },];

  
   

const MobileNav = ({user}) => {
    const location =useLocation()
    const{pathname}=location
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
  <SheetTrigger><img src="/vite.svg" width={30} height={30} alt="menu" className="cursor-pointer" /></SheetTrigger>
  <SheetContent side="left" className="border-none bg-white">
   
  
          <Link to="/" className=" cursor-pointer flex items-center gap-1 px-4">
          <img src="/vite.svg" width={34} height={34} alt="vite logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-blue-950">Bank</h1>
          </Link>

          <div className="mobilenav-sheet">
             <SheetClose asChild>
             <nav className="flex h-full flex-col gap-6 pt-16 text-white">
             {sidebarLinks.map((item)=>{
            const isActive = pathname ===item.route || pathname.startsWith(`${item.route}/`)
            return( 
                <SheetClose asChild key={item.route}>
                <Link to={item.route} key ={item.label} className={cn('mobilenav-sheet_close w-full',{'bg-bank-gradient':isActive})}>
                    <div className="relative size-6">
                       <img src={item.imgURL} alt={item.label} width={20} height={20} className={cn({'brightness-[3] invert-0':isActive})} />
                    </div>
                    <p className={cn('text-16 font-semibold text-gray-800',{'!text-white':isActive})} >{item.label}</p>
                </Link>
                </SheetClose>
                
            )
          })}
          USER
             </nav>
             </SheetClose>
             FOOTER
          </div>
          
         
  </SheetContent>
</Sheet>

    </section>
  )
}
MobileNav.propTypes = mobileNavProps

export default MobileNav
