'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically have your actual login logic
    // For this example, we'll just simulate a successful login
    setIsLoggedIn(true);
    document.cookie = "loggedIn=true; path=/";
  };

  if (isLoggedIn) {
    router.push('/dashboard');
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 ">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;