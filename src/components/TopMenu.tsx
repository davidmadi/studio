'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const TopMenu: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the user is logged in based on a cookie or session
    const loggedIn = document.cookie.includes('loggedIn=true');
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove the loggedIn cookie
    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/'); // Redirect to home page after logout
  };
  const activeLinkStyle = "text-blue-600"; // Style for the active link


  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-lg font-bold text-gray-700">
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-gray-600 hover:text-blue-600 ${
              pathname === '/dashboard' ? activeLinkStyle : ''
            }`}
          >
            Dashboard
          </Link>
          {/* Conditionally render based on login status */}
          {!isLoggedIn && (
            <Link
              href="/login"
              className={`text-gray-600 hover:text-blue-600 ${
                pathname === '/login' ? activeLinkStyle : ''
              }`}
            >
              Login
            </Link>
          )}
        </div>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
// const TopMenu: React.FC = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/dashboard">Dashboard</Link>
//         </li>
//         <li><Link href="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// };

export default TopMenu;
