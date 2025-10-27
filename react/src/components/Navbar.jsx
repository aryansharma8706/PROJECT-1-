import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navlinks = [
    { to: '/', title: 'Home' },
    { to: '/services', title: 'Services' },
    { to: '/about-us', title: 'About us' },
    { to: '/products', title: 'Products' },
    { to: '/dashboard', title: 'Dashboard' },
    { to: '/login', title: 'Logout' },
  ];

  return (
    <header className="bg-white shadow-lg  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              logo
            </Link>
          </div>

          <nav className="">
            <div className="ml-10 flex items-baseline space-x-8">
              {navlinks.map((nav) => (
                <Link
                  key={nav.to}
                  to={nav.to}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium transition-colors duration-200 hover:bg-gray-100"
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
