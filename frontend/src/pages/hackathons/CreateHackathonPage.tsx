import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateHackathonPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        prizePool: "",
        maxTeamSize: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col justify-center py-12 px-4">
            <div className="max-w-2xl mx-auto w-full bg-white/80 dark:bg-black/80 rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold mb-8 text-primary text-center">Create a Hackathon</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium text-foreground">
                            Hackathon Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-background text-foreground"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium text-foreground">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-primary focus:border-primary bg-background text-foreground"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="startDate" className="text-sm font-medium text-foreground">
                                Start Date
                            </label>
                            <input
                                type="datetime-local"
                                id="startDate"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-background text-foreground"
                                value={formData.startDate}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="endDate" className="text-sm font-medium text-foreground">
                                End Date
                            </label>
                            <input
                                type="datetime-local"
                                id="endDate"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-background text-foreground"
                                value={formData.endDate}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="prizePool" className="text-sm font-medium text-foreground">
                                Prize Pool
                            </label>
                            <input
                                type="text"
                                id="prizePool"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-background text-foreground"
                                value={formData.prizePool}
                                onChange={(e) => setFormData({ ...formData, prizePool: e.target.value })}
                                placeholder="e.g., $10,000"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="maxTeamSize" className="text-sm font-medium text-foreground">
                                Maximum Team Size
                            </label>
                            <input
                                type="number"
                                id="maxTeamSize"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-background text-foreground"
                                value={formData.maxTeamSize}
                                onChange={(e) => setFormData({ ...formData, maxTeamSize: e.target.value })}
                                min="1"
                                required
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        Create Hackathon
                    </Button>
                </form>
            </div>
        </div>
    );
} 