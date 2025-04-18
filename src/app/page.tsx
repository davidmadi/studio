import React from 'react';
import Link from 'next/link';

const Home: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Welcome to Our Awesome App!
              </h1>
              <p className="mt-2 text-lg text-gray-500 mb-6">
                Discover the power of our application and explore its amazing features.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Feature One</h2>
            <p className="text-gray-600">
              Brief description of feature one. Highlight its benefits and how it helps users.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Feature Two</h2>
            <p className="text-gray-600">
              Brief description of feature two. Explain why users would love this feature.
            </p>
          </div>
        </div>

        {/* Call to Action / Link */}
        <div className="bg-indigo-50 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold text-indigo-900 mb-2">Explore More</h2>
            <Link href="/dashboard" className="text-indigo-600 hover:underline">Go to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
