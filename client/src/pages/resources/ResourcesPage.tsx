import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function ResourcesPage() {
    const resources = [
        {
            title: "Project Templates",
            description: "Ready-to-use templates for various hackathon projects",
            link: "/resources/templates",
            icon: "📋"
        },
        {
            title: "API Integration",
            description: "Popular APIs and integration guides",
            link: "/resources/apis",
            icon: "🔌"
        },
        {
            title: "Learning Resources",
            description: "Tutorials and guides for various technologies",
            link: "/resources/tutorials",
            icon: "📚"
        },
        {
            title: "Development Tools",
            description: "Essential tools for hackathon development",
            link: "/resources/tools",
            icon: "🛠️"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <SplashCursor />
            <h1 className="text-4xl font-bold mb-8 text-primary">Resources</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                    <div key={resource.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">{resource.icon}</div>
                        <h2 className="text-xl font-semibold mb-2 text-foreground">{resource.title}</h2>
                        <p className="text-muted-foreground mb-4">{resource.description}</p>
                        <Link to={resource.link}>
                            <Button variant="outline">Explore</Button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Featured Tutorials Section */}
            <section className="py-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Featured Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card border border-accent rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Getting Started with React</h3>
                        <p className="text-muted-foreground mb-4">A beginner-friendly guide to building your first React app.</p>
                        <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read Tutorial</a>
                    </div>
                    <div className="bg-card border border-accent rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Integrating APIs in Your Project</h3>
                        <p className="text-muted-foreground mb-4">Step-by-step instructions for connecting to popular APIs.</p>
                        <a href="https://www.freecodecamp.org/news/how-to-use-an-api-in-javascript/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read Tutorial</a>
                    </div>
                </div>
            </section>

            {/* Community Links Section */}
            <section className="py-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Community Links</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Join Discord</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">GitHub</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Twitter</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">LinkedIn</a>
                </div>
            </section>

            {/* Submit a Resource CTA */}
            <section className="py-12 max-w-2xl mx-auto text-center">
                <h2 className="text-xl font-bold text-primary mb-4">Have a resource to share?</h2>
                <p className="text-muted-foreground mb-6">Help the community by submitting your favorite tools, guides, or templates.</p>
                <Button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Submit a Resource</Button>
            </section>
        </div>
    );
} 