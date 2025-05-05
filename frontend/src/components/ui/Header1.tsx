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
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header1() {
    const { user, isAuthenticated, logout } = useAuth();
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
            title: "Community",
            description: "Connect with other hackers",
            items: [
                { title: "Forums", href: "/community/forums" },
                { title: "Discord", href: "https://discord.gg/hackverse" },
                { title: "Teams", href: "/community/teams" },
                { title: "Events", href: "/community/events" },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <NavigationMenuLink asChild>
                                            <Link to={item.href}>
                                                <Button variant="ghost">{item.title}</Button>
                                            </Link>
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Link to={item.items?.[0]?.href || item.href}>
                                                            <Button size="sm" className="mt-10">
                                                                Learn more
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                asChild
                                                                key={subItem.title}
                                                            >
                                                                {subItem.href.startsWith('http') ? (
                                                                    <a 
                                                                        href={subItem.href}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                                    >
                                                                        <span>{subItem.title}</span>
                                                                        <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                    </a>
                                                                ) : (
                                                                    <Link 
                                                                        to={subItem.href} 
                                                                        className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                                    >
                                                                        <span>{subItem.title}</span>
                                                                        <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                    </Link>
                                                                )}
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <Link to="/" className="font-semibold text-xl">Hackverse</Link>
                </div>
                <div className="flex justify-end w-full gap-4">
                    {isAuthenticated && user ? (
                        <>
                            <Link to="/dashboard">
                                <Button variant="secondary">Dashboard</Button>
                            </Link>
                            <span className="text-lg font-semibold">Welcome, {user.name}!</span>
                            <Button variant="outline" onClick={logout}>Sign Out</Button>
                        </>
                    ) : (
                        <>
                            <Link to="/hackathons/create">
                                <Button variant="ghost" className="hidden md:inline">
                                    Host a Hackathon
                                </Button>
                            </Link>
                            <div className="border-r hidden md:inline"></div>
                            <Link to="/login">
                                <Button variant="outline">Sign in</Button>
                            </Link>
                            <Link to="/signup">
                                <Button>Get started</Button>
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                to={item.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                subItem.href.startsWith('http') ? (
                                                    <a
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex justify-between items-center"
                                                    >
                                                        <span className="text-muted-foreground">
                                                            {subItem.title}
                                                        </span>
                                                        <MoveRight className="w-4 h-4 stroke-1" />
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={subItem.title}
                                                        to={subItem.href}
                                                        className="flex justify-between items-center"
                                                    >
                                                        <span className="text-muted-foreground">
                                                            {subItem.title}
                                                        </span>
                                                        <MoveRight className="w-4 h-4 stroke-1" />
                                                    </Link>
                                                )
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 }; 