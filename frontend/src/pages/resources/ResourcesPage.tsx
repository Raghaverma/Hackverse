import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
            <h1 className="text-4xl font-bold mb-8">Resources</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                    <div key={resource.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">{resource.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                        <p className="text-muted-foreground mb-4">{resource.description}</p>
                        <Link to={resource.link}>
                            <Button variant="outline">Explore</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
} 