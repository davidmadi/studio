import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Dashboard</h1>
              <p className="card-text text-center">Welcome to your dashboard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;