

import MobileNav from '@/components/MobileNav';
import Sidebar  from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {

  const loggedIn ={firstName: 'Updesh' , lastName:'Yadav'}
  return (
    <div >
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">

          <div className='root-layout'>
            <img src="/vite.svg" width={30} height={30} alt="logo" />
            <div>
            <MobileNav user={loggedIn}/>
            </div>
          </div>
          <Outlet />
        </div>
        
      </main>
    </div>
  );
};

export default SidebarLayout;

