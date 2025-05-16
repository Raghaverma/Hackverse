import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header1() {
    const { user, isAuthenticated, logout } = useAuth();
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "Welcome to Hackverse",
        },
        {
            title: "Hackathons",
            description: "Find and join exciting hackathons",
            items: [
                { title: "Upcoming", href: "/hackathons" },
                { title: "Ongoing", href: "/hackathons/ongoing" },
                { title: "Past", href: "/hackathons/past" },
                { title: "Create", href: "/hackathons/create" },
            ],
        },
        {
            title: "Resources",
            description: "Tools and resources for hackers",
            items: [
                { title: "Templates", href: "/resources/templates" },
                { title: "APIs", href: "/resources/apis" },
                { title: "Tutorials", href: "/resources/tutorials" },
                { title: "Tools", href: "/resources/tools" },
            ],
        },
        {
            title: "About Us",
            description: "Learn more about Hackverse",
            items: [
                { title: "Our Story", href: "/about/story" },
                { title: "Team", href: "/about/team" },
                { title: "Contact", href: "/about/contact" },
                { title: "Careers", href: "/about/careers" },
            ],
        },
    ];

    return (
        <header className={`w-full z-40 fixed top-0 left-0 bg-white transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex items-center justify-between min-h-20">
                <div className="flex-shrink-0">
                    <Link to="/" className="font-semibold text-xl text-primary">Hackverse</Link>
                </div>
                <nav className="flex items-center gap-4 ml-auto">
                    <Link to="/about" className="text-primary hover:underline">About</Link>
                    <Link to="/hackathons" className="text-primary hover:underline">Hackathons</Link>
                    <Link to="/resources" className="text-primary hover:underline">Resources</Link>
                    {isAuthenticated && user ? (
                        <>
                            <Button variant="outline" onClick={logout}>Sign Out</Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button variant="outline">Sign In</Button>
                            </Link>
                            <Link to="/signup">
                                <Button>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export { Header1 }; 