import React from "react";
import InteractiveHero from "../components/ui/InteractiveHero";
import { Particles } from "../components/ui/particles";

const HomePage = () => {
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
    },
    {
      id: 4,
      name: "HealthTech Sprint",
      date: "August 5-7, 2024",
      prize: "$8,000",
      participants: 100,
      status: "Registration Open",
      theme: "Healthcare Innovation",
      description: "Innovate for better healthcare solutions",
      skills: ["Python", "Biotech", "Data Science"],
      mentors: ["Dr. Lisa Wong", "Dr. Raj Patel"]
    },
    {
      id: 5,
      name: "FinTech Fusion",
      date: "September 12-14, 2024",
      prize: "$11,000",
      participants: 130,
      status: "Coming Soon",
      theme: "Finance & Technology",
      description: "Revolutionize the future of finance",
      skills: ["JavaScript", "APIs", "FinTech"],
      mentors: ["Samantha Lee", "John Carter"]
    },
    {
      id: 6,
      name: "EduTech Jam",
      date: "October 20-22, 2024",
      prize: "$9,000",
      participants: 110,
      status: "Registration Open",
      theme: "Education Technology",
      description: "Transform learning with technology",
      skills: ["React", "UX/UI", "EdTech"],
      mentors: ["Priya Singh", "Tom Evans"]
    },
    {
      id: 7,
      name: "Cybersecurity Blitz",
      date: "November 15-17, 2024",
      prize: "$13,000",
      participants: 140,
      status: "Registration Open",
      theme: "Cybersecurity",
      description: "Defend and innovate in the world of cybersecurity",
      skills: ["Python", "Networking", "Security"],
      mentors: ["Dr. Alan Turing", "Grace Hopper"]
    },
    {
      id: 8,
      name: "SpaceTech Odyssey",
      date: "December 5-7, 2024",
      prize: "$20,000",
      participants: 160,
      status: "Coming Soon",
      theme: "Space Technology",
      description: "Innovate for the next frontier in space exploration",
      skills: ["Aerospace", "Robotics", "AI"],
      mentors: ["Elena Musk", "Neil Armstrong Jr."]
    }
  ];

  const stats = [
    { label: "Total Hackathons", value: "50+", icon: "🏆" },
    { label: "Active Participants", value: "2,500+", icon: "👥" },
    { label: "Projects Created", value: "1,000+", icon: "💡" },
    { label: "Prize Money", value: "$500K+", icon: "💰" }
  ];

  return (
    <div className="relative w-full min-h-screen">
      <Particles className="fixed inset-0 z-0" quantity={1440} color="#2563eb" />
      <div className="relative z-10">
        <InteractiveHero />
        {/* Stats Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg flex flex-col items-center p-6 border border-border hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <span className="text-3xl mb-2">{stat.icon}</span>
                <h3 className="text-2xl font-extrabold text-primary mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Upcoming Hackathons */}
        <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Upcoming Hackathons</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {upcomingHackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="bg-card bg-white/70 border border-border rounded-xl shadow-lg flex flex-col items-center justify-center min-h-[120px] h-[120px] p-6 text-center"
              >
                <h3 className="text-xl font-bold text-primary mb-1">{hackathon.name}</h3>
                <div className="text-sm text-muted-foreground mb-1">{hackathon.date}</div>
                <div className="text-sm text-muted-foreground mb-1">{hackathon.theme}</div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold mb-2 ${hackathon.status === 'Registration Open' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>{hackathon.status}</span>
                <span className="text-lg font-bold text-primary">{hackathon.prize}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Why Join Hackverse? */}
        <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Why Join Hackverse?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <span className="text-5xl mb-4">🤝</span>
              <h3 className="text-xl font-bold text-primary mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground text-center">Connect with like-minded developers and form teams to work on innovative projects.</p>
            </div>
            <div
              className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <span className="text-5xl mb-4">👨‍🏫</span>
              <h3 className="text-xl font-bold text-primary mb-2">Mentorship</h3>
              <p className="text-muted-foreground text-center">Get guidance from industry experts and experienced mentors throughout your hackathon journey.</p>
            </div>
            <div
              className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <span className="text-5xl mb-4">🎯</span>
              <h3 className="text-xl font-bold text-primary mb-2">Project Showcase</h3>
              <p className="text-muted-foreground text-center">Showcase your projects to potential employers and the tech community.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
