import React from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder stat cards */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-500 text-sm">Pending Mentors</p>
              <h2 className="text-2xl font-bold text-blue-600">12</h2>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-500 text-sm">Total Participants</p>
              <h2 className="text-2xl font-bold text-green-600">142</h2>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-500 text-sm">Teams Registered</p>
              <h2 className="text-2xl font-bold text-purple-600">36</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
