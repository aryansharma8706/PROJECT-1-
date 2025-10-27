import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Dashboardpage() {
  return (
    <div className="flex">
      <aside className="bg-blue-700 flex flex-col gap-2 text-white font-bold text-2xl justify-center px-10 w-96 h-screen">
        <Link to="/dashboard/overview">Overview</Link>
        <Link to="/dashboard/customers">Customers</Link>
        <Link>Integration</Link>
      </aside>
      <div className="ml-104">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboardpage;
