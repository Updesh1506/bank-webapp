
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  return (
    <div >
      {/* Sidebar */}
      <aside>
      sidebar
      </aside>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;

