import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center max-w-xl mx-auto p-8 rounded-2xl shadow-xl bg-white/80 dark:bg-black/80">
        <h1 className="text-5xl font-bold mb-4 text-primary">Welcome to Hackverse!</h1>
        <p className="text-lg text-muted-foreground mb-8">Your gateway to the most exciting hackathons, resources, and innovation.</p>
        <div className="flex justify-center gap-4">
          <a href="/signup" className="px-6 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition">Sign Up</a>
          <a href="/login" className="px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition">Login</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 