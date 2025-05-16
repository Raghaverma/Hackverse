import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Hardcoded admin credentials
        const adminUsername = "admin@gmail.com";
        const adminPassword = "admin@123";

        // Check if the entered credentials match the admin credentials
        if (formData.username === adminUsername && formData.password === adminPassword) {
            console.log("Admin logged in successfully!");
            navigate("/admin-dashboard"); // Redirect to admin dashboard (you can change the route)
        } else {
            console.log("Invalid credentials");
            // You can show an error message or perform other actions here
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Welcome Back</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium">
                            Username
                        </label>
                        <input
                            type="text"  // 'text' type to remove email validation
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
