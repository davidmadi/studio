'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const TopMenu: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/dashboard') {
      setIsLoggedIn(true);
    }
  }, [pathname]);
  useEffect(() => {
    // Check if the user is logged in based on the cookie
    const loggedInCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('loggedIn='));
    setIsLoggedIn(loggedInCookie !== undefined);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove the loggedIn cookie
    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/'); // Redirect to home page after logout
  };


    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">My App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) :
              (
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/login' ? 'active' : ''}`} href="/login">Login</Link>
                </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;