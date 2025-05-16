import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HackathonsPage: React.FC = () => {
  return (
    <div>
      {/* Featured Hackathons Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Featured Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <span className="text-5xl mb-4">🚀</span>
            <h3 className="text-xl font-bold text-primary mb-2">AI Innovation Challenge</h3>
            <p className="text-muted-foreground text-center">Build innovative AI solutions for real-world problems.</p>
            <Button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Learn More</Button>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <span className="text-5xl mb-4">🌐</span>
            <h3 className="text-xl font-bold text-primary mb-2">Web3 Buildathon</h3>
            <p className="text-muted-foreground text-center">Create the next generation of decentralized applications.</p>
            <Button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Join Our Community</h2>
        <p className="text-muted-foreground text-center mb-6">Be part of a vibrant community of developers and innovators.</p>
        <div className="flex justify-center">
          <Button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Join Now</Button>
        </div>
      </section>

      {/* Past Hackathons Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Past Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <span className="text-5xl mb-4">🏆</span>
            <h3 className="text-xl font-bold text-primary mb-2">Hackathon 2023</h3>
            <p className="text-muted-foreground text-center">A celebration of innovation and creativity.</p>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <span className="text-5xl mb-4">🎉</span>
            <h3 className="text-xl font-bold text-primary mb-2">Hackathon 2022</h3>
            <p className="text-muted-foreground text-center">Building the future together.</p>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <span className="text-5xl mb-4">🌟</span>
            <h3 className="text-xl font-bold text-primary mb-2">Hackathon 2021</h3>
            <p className="text-muted-foreground text-center">Innovation at its finest.</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Resources</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-primary hover:underline">Documentation</a>
          <a href="#" className="text-primary hover:underline">Community Forums</a>
          <a href="#" className="text-primary hover:underline">Support</a>
        </div>
      </section>

      {/* Hackathon Schedule Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Hackathon Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-xl font-bold text-primary mb-2">Day 1</h3>
            <p className="text-muted-foreground text-center">Registration and Opening Ceremony</p>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-xl font-bold text-primary mb-2">Day 2</h3>
            <p className="text-muted-foreground text-center">Workshops and Team Building</p>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-xl font-bold text-primary mb-2">Day 3</h3>
            <p className="text-muted-foreground text-center">Project Development and Mentorship</p>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-xl font-bold text-primary mb-2">Day 4</h3>
            <p className="text-muted-foreground text-center">Final Presentations and Awards</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center tracking-tight">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <p className="text-muted-foreground text-center italic">"The hackathon was an incredible experience. I learned so much and met amazing people."</p>
            <p className="text-primary font-bold mt-4">- Jane Doe</p>
          </div>
          <div className="bg-card border border-accent rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
            <p className="text-muted-foreground text-center italic">"A great opportunity to showcase your skills and network with industry professionals."</p>
            <p className="text-primary font-bold mt-4">- John Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonsPage; 