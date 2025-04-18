import React from 'react';
import Link from 'next/link';
const Home: React.FC<{}> = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <h1 className="card-title display-4 mb-4">Welcome to Our Awesome App!</h1>
              <p className="card-text lead mb-5">Discover the power of our application and explore its amazing features.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link href="/login" className="btn btn-primary btn-lg px-4 gap-3">Login</Link>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
