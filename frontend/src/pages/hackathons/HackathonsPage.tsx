import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HackathonsPage() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Hackathons</h1>
                <Link to="/hackathons/create">
                    <Button>Create Hackathon</Button>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example hackathon cards - replace with actual data */}
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">AI Innovation Challenge</h2>
                    <p className="text-muted-foreground mb-4">Build the next generation of AI applications</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Starts in 5 days</span>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Web3 Development</h2>
                    <p className="text-muted-foreground mb-4">Create innovative blockchain solutions</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Ongoing</span>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Mobile App Challenge</h2>
                    <p className="text-muted-foreground mb-4">Build the next viral mobile application</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Ends in 2 days</span>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 