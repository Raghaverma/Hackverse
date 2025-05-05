import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import InteractiveHero from "../components/ui/InteractiveHero";
import { Header1 } from "../components/ui/Header1";
import { BentoDemo } from "../components/ui/bento-demo";

interface Hackathon {
  id: number;
  name: string;
  date: string;
  prize: string;
  participants: number;
  status: string;
  theme: string;
  description: string;
  skills: string[];
  mentors: string[];
}

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HACKATHON_DATE = new Date('2025-05-07T10:00:00');

function getCountdown(): Countdown {
  const now = new Date();
  const diff = HACKATHON_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const HomePage: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const { user } = useAuth();
  const [countdown, setCountdown] = useState<Countdown>(getCountdown());

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

  const upcomingHackathons: Hackathon[] = [
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

  const stats: Stat[] = [
    { label: "Total Hackathons", value: "50+", icon: "🏆" },
    { label: "Active Participants", value: "2,500+", icon: "👥" },
    { label: "Projects Created", value: "1,000+", icon: "💡" },
    { label: "Prize Money", value: "$500K+", icon: "💰" }
  ];

  return (
    <div className="bg-[#09090b] text-white min-h-screen font-sans">
      <Header1 />
      <InteractiveHero />

      {/* Bento Grid Section - visually dynamic, replaces old hackathon/feature cards */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center tracking-tight">
            Explore Hackverse
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Discover opportunities to learn, build, and showcase your skills in our vibrant hackathon community
          </p>
          <BentoDemo />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] pointer-events-none" />
        <div className="relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#18181b] rounded-xl shadow-lg flex flex-col items-center p-6 border border-[#23232a] hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <span className="text-3xl mb-2">{stat.icon}</span>
                <h3 className="text-2xl font-extrabold text-primary mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 