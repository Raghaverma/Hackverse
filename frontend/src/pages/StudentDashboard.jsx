import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BentoDemo } from '../components/ui/bento-demo';

const StudentDashboard = () => {
  // Dashboard removed as per user request
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans py-12 px-4 flex items-center justify-center">
      <h2 className="text-2xl font-bold text-primary">Student Dashboard has been removed.</h2>
    </div>
  );
      <section className="max-w-5xl mx-auto bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] p-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-[#23232a] rounded-xl p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">📊</span>
            <h3 className="font-bold text-primary mb-1">Your Progress</h3>
            <p className="text-gray-300 mb-2">2 Hackathons Completed</p>
            <div className="w-full h-2 bg-gray-700 rounded-full mb-2">
              <div className="h-2 bg-primary rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="bg-[#23232a] rounded-xl p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">🏆</span>
            <h3 className="font-bold text-primary mb-1">Achievements</h3>
            <p className="text-gray-300 mb-2">3 Awards Won</p>
            <div className="flex gap-2">
              <span className="bg-primary text-black px-2 py-1 rounded text-xs font-bold">🥇 First Place</span>
              <span className="bg-primary text-black px-2 py-1 rounded text-xs font-bold">🎯 Best Design</span>
              <span className="bg-primary text-black px-2 py-1 rounded text-xs font-bold">💡 Innovation</span>
            </div>
          </div>
          <div className="bg-[#23232a] rounded-xl p-6 flex flex-col items-center">
            <span className="text-2xl mb-2">👥</span>
            <h3 className="font-bold text-primary mb-1">Team Members</h3>
            <p className="text-gray-300 mb-2">5 Active Members</p>
            <div className="flex gap-2">
              <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">JD</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">AS</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">+3</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/dashboard" className="bg-[#23232a] rounded-xl p-6 flex flex-col items-center hover:border-primary border border-transparent transition">
            <span className="text-2xl mb-2">👨‍🎓</span>
            <h3 className="font-bold text-primary mb-1">Student Dashboard</h3>
            <p className="text-gray-300 mb-2 text-center">Track your progress and achievements</p>
            <div className="flex gap-4 mb-2">
              <div className="text-center">
                <span className="block text-lg font-bold text-primary">2</span>
                <small className="text-gray-400">Completed</small>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-primary">1</span>
                <small className="text-gray-400">Ongoing</small>
              </div>
            </div>
            <span className="text-primary text-xl">→</span>
          </Link>
          <Link to="/dashboard/projects" className="bg-[#23232a] rounded-xl p-6 flex flex-col items-center hover:border-primary border border-transparent transition">
            <span className="text-2xl mb-2">💡</span>
            <h3 className="font-bold text-primary mb-1">My Projects</h3>
            <p className="text-gray-300 mb-2 text-center">View and manage your projects</p>
            <div className="flex gap-4 mb-2">
              <div className="text-center">
                <span className="block text-lg font-bold text-primary">3</span>
                <small className="text-gray-400">Projects</small>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-primary">2</span>
                <small className="text-gray-400">In Progress</small>
              </div>
            </div>
            <span className="text-primary text-xl">→</span>
          </Link>
          <Link to="/dashboard/team" className="bg-[#23232a] rounded-xl p-6 flex flex-col items-center hover:border-primary border border-transparent transition">
            <span className="text-2xl mb-2">🤝</span>
            <h3 className="font-bold text-primary mb-1">My Team</h3>
            <p className="text-gray-300 mb-2 text-center">Connect with your team members</p>
            <div className="flex gap-4 mb-2">
              <div className="text-center">
                <span className="block text-lg font-bold text-primary">5</span>
                <small className="text-gray-400">Members</small>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-primary">2</span>
                <small className="text-gray-400">Projects</small>
              </div>
            </div>
            <span className="text-primary text-xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard; 