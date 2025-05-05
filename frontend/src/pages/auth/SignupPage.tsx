import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Create an Account</h1>
                
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
                        <label htmlFor="username" className="text-sm font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full p-2 border rounded-md"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-2 border rounded-md"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary hover:underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
} 