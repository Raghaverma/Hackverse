import {
  TrophyIcon,
  UsersIcon,
  BarChartIcon,
  GraduationCapIcon,
  LightbulbIcon,
  HandshakeIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: BarChartIcon,
    name: "Your Progress",
    description: "<span class='text-3xl font-bold text-primary'>2</span> Hackathons Completed",
    href: "/dashboard/progress",
    cta: "View Progress",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-blue-400/30" />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: TrophyIcon,
    name: "Achievements",
    description: "<span class='text-3xl font-bold text-yellow-400'>3</span> Awards Won<br/><span class='inline-flex gap-2 mt-2'><span class='bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold'>🥇 First Place</span><span class='bg-pink-400 text-black px-2 py-1 rounded text-xs font-bold'>🎯 Best Design</span><span class='bg-blue-200 text-black px-2 py-1 rounded text-xs font-bold'>💡 Innovation</span></span>",
    href: "/dashboard/achievements",
    cta: "View Achievements",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-yellow-900/60" />
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: UsersIcon,
    name: "Team Members",
    description: "<span class='text-3xl font-bold text-purple-400'>5</span> Active Members<br/><span class='inline-flex gap-2 mt-2'><span class='bg-gray-700 text-white px-2 py-1 rounded-full text-xs'>JD</span><span class='bg-gray-700 text-white px-2 py-1 rounded-full text-xs'>AS</span><span class='bg-gray-700 text-white px-2 py-1 rounded-full text-xs'>+3</span></span>",
    href: "/dashboard/team",
    cta: "View Team",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-purple-400/30" />
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: GraduationCapIcon,
    name: "Student Dashboard",
    description: "Track your progress and achievements<br/><span class='text-2xl font-bold text-primary'>2</span> Completed, <span class='text-2xl font-bold text-primary'>1</span> Ongoing",
    href: "/dashboard",
    cta: "Go",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 to-blue-900/60" />
    ),
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: LightbulbIcon,
    name: "My Projects",
    description: "View and manage your projects<br/><span class='text-2xl font-bold text-yellow-300'>3</span> Projects, <span class='text-2xl font-bold text-yellow-300'>2</span> In Progress",
    href: "/dashboard/projects",
    cta: "Go",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/30 to-yellow-900/60" />
    ),
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: HandshakeIcon,
    name: "My Team",
    description: "Connect with your team members<br/><span class='text-2xl font-bold text-pink-400'>5</span> Members, <span class='text-2xl font-bold text-pink-400'>2</span> Projects",
    href: "/dashboard/team",
    cta: "Go",
    background: (
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/30 to-pink-900/60" />
    ),
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-2">
      {features.map((feature) => (
        <a
          key={feature.name}
          href={feature.href}
          className="group block h-full w-full focus:outline-none focus:ring-2 focus:ring-primary rounded-xl transition-transform duration-200 hover:scale-[1.03] hover:z-20"
        >
          <BentoCard
            {...feature}
            description={<span dangerouslySetInnerHTML={{ __html: feature.description }} />}
          />
        </a>
      ))}
    </BentoGrid>
  );
}

export { BentoDemo }; 