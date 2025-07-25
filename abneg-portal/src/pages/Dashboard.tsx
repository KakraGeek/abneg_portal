import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Member Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Welcome back, {user?.name}!
              </p>
            </div>
            <button
              className="border border-red-300 text-red-600 hover:text-red-700 px-4 py-2 rounded-md text-sm font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Profile Information */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Your Account Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Info */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Profile Details</h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Name</dt>
                      <dd className="text-sm text-gray-900">{user?.name}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="text-sm text-gray-900">{user?.email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Auth0 ID</dt>
                      <dd className="text-sm text-gray-900">{user?.sub}</dd>
                    </div>
                  </dl>
                </div>

                {/* Role Status */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Role Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 rounded bg-green-100 text-green-800">
                      <span className="mr-2">✓</span>
                      Member
                    </div>
                    <div className="flex items-center p-2 rounded bg-gray-100 text-gray-600">
                      <span className="mr-2">✗</span>
                      Administrator
                    </div>
                    <div className="flex items-center p-2 rounded bg-gray-100 text-gray-600">
                      <span className="mr-2">✗</span>
                      Super Administrator
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Member Features */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Member Features
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Profile Management</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Update your personal information and contact details.
                  </p>
                  <button className="border border-gray-300 text-gray-500 px-3 py-1 rounded text-sm" disabled>
                    Coming Soon
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Loan Applications</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Apply for loans and track your application status.
                  </p>
                  <button className="border border-gray-300 text-gray-500 px-3 py-1 rounded text-sm" disabled>
                    Coming Soon
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Event Registration</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Register for upcoming events and view your RSVPs.
                  </p>
                  <button className="border border-gray-300 text-gray-500 px-3 py-1 rounded text-sm" disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Access Notice */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Admin Access Available
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    You have administrative privileges. 
                    <button 
                      className="p-0 h-auto text-blue-700 underline ml-1"
                      onClick={() => window.location.href = '/admin'}
                    >
                      Access Admin Panel
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
