import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Welcome Back</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded-md"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border rounded-md"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
} 