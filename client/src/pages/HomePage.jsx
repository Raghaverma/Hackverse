import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import InteractiveHero from "../components/ui/InteractiveHero";

const HACKATHON_DATE = new Date('2025-05-07T10:00:00');

function getCountdown() {
  const now = new Date();
  const diff = HACKATHON_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const HomePage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { user, logout } = useAuth();
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const upcomingHackathons = [
    {
      id: 1,
      name: "AI Innovation Challenge",
      date: "May 15-17, 2024",
      prize: "$10,000",
      participants: 150,
      status: "Registration Open",
      theme: "Artificial Intelligence",
      description: "Build innovative AI solutions for real-world problems",
      skills: ["Python", "TensorFlow", "Machine Learning"],
      mentors: ["Dr. Sarah Chen", "Prof. James Wilson"]
    },
    {
      id: 2,
      name: "Web3 Buildathon",
      date: "June 1-3, 2024",
      prize: "$15,000",
      participants: 200,
      status: "Coming Soon",
      theme: "Blockchain & Web3",
      description: "Create the next generation of decentralized applications",
      skills: ["Solidity", "React", "Web3.js"],
      mentors: ["Alex Thompson", "Maria Rodriguez"]
    },
    {
      id: 3,
      name: "GreenTech Hackathon",
      date: "July 10-12, 2024",
      prize: "$12,000",
      participants: 120,
      status: "Registration Open",
      theme: "Sustainability",
      description: "Develop solutions for environmental challenges",
      skills: ["IoT", "Data Analytics", "Cloud Computing"],
      mentors: ["Dr. Emily Green", "Mark Johnson"]
    }
  ];

  const stats = [
    { label: "Total Hackathons", value: "50+", icon: "🏆" },
    { label: "Active Participants", value: "2,500+", icon: "👥" },
    { label: "Projects Created", value: "1,000+", icon: "💡" },
    { label: "Prize Money", value: "$500K+", icon: "💰" }
  ];

  return (
    <div className="bg-[#09090b] text-white min-h-screen font-sans">
      <InteractiveHero />

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#18181b] rounded-xl shadow-lg flex flex-col items-center p-6 border border-[#23232a] hover:border-primary transition">
              <span className="text-3xl mb-2">{stat.icon}</span>
              <h3 className="text-2xl font-extrabold text-primary mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Upcoming Hackathons</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] p-6 flex flex-col hover:border-primary transition">
              <h3 className="text-xl font-bold text-primary mb-2">{hackathon.name}</h3>
              <div className="text-gray-400 text-sm mb-2">{hackathon.date} • {hackathon.theme}</div>
              <p className="mb-2 text-gray-300">{hackathon.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {hackathon.skills.map((skill, idx) => (
                  <span key={idx} className="bg-[#23232a] text-primary px-2 py-1 rounded text-xs font-semibold">{skill}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {hackathon.mentors.map((mentor, idx) => (
                  <span key={idx} className="bg-[#23232a] text-gray-200 px-2 py-1 rounded text-xs">{mentor}</span>
                ))}
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${hackathon.status === 'Registration Open' ? 'bg-primary text-black' : 'bg-gray-700 text-gray-300'}`}>{hackathon.status}</span>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-primary">{hackathon.prize}</span>
                <button className="ml-2 px-4 py-2 rounded-lg bg-primary text-black font-semibold shadow hover:bg-primary/80 transition">Register</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Why Join Hackverse?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="text-xl font-bold text-primary mb-2">Team Collaboration</h3>
            <p className="text-gray-300 text-center">Connect with like-minded developers and form teams to work on innovative projects.</p>
          </div>
          <div className="bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">👨‍🏫</div>
            <h3 className="text-xl font-bold text-primary mb-2">Mentorship</h3>
            <p className="text-gray-300 text-center">Get guidance from industry experts and experienced mentors throughout your hackathon journey.</p>
          </div>
          <div className="bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-xl font-bold text-primary mb-2">Project Showcase</h3>
            <p className="text-gray-300 text-center">Showcase your projects to potential employers and the tech community.</p>
          </div>
        </div>
      </section>

      {/* Dashboard Access */}
      {user ? (
        <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
          <div className="bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] p-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Welcome to Your Dashboard</h2>
            <p className="text-gray-400 mb-6">Manage your hackathon journey</p>
            <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default HomePage;
