"use client"

import * as React from "react"
import { FaBook, FaPodcast, FaRegNewspaper, FaVideo } from "react-icons/fa";
import { FiBookOpen, FiMonitor, FiTool } from "react-icons/fi";
import { GiGears } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Updated resourcesByType with new icons
const resourcesByType = [
  { title: "My Notes", href: "/", icon: <FaRegNewspaper className="text-orange-500" /> }, // Keeps the existing icon
  { title: "Book Notes", href: "/", icon: <FiBookOpen className="text-green-500" /> }, // Changed to FiBookOpen for a "book" feeling
  { title: "Videos", href: "/", icon: <FaVideo className="text-purple-500" /> }, // Kept the video icon
  { title: "Free Courses", href: "/", icon: <MdWorkOutline className="text-blue-500" /> }, // Changed to MdWorkOutline for courses/workshops
];

// Updated resourcesByTopic with new icons
const resourcesByTopic = [
  { title: "Top Mate", href: "/", icon: <GiGears className="text-yellow-500" /> }, // Kept GiGears (gears for tools/innovation)
  { title: "Community Courses (Join Forces)", href: "/", icon: <FiTool className="text-purple-500" /> }, // Kept FiTool for tools/workshops
  { title: "Media Coverage", href: "/", icon: <FiMonitor className="text-orange-500" /> }, // Kept FiMonitor for media and displays
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent font-normal lg:font-semibold text-lg px-0">Free Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <div>
                <h3 className="mb-3 text-md font-semibold">Browse by type:</h3>
                <ul className="space-y-3">
                  {resourcesByType.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} />
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-md font-semibold">Guides & Media:</h3>
                <ul className="space-y-3">
                  {resourcesByTopic.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} />
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, icon, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-center space-x-3 p-2 rounded-md transition hover:bg-gray-100",
            className
          )}
          {...props}
        >
          <span className="text-3xl w-10 h-10">{icon}</span>
          <span className="text-xl font-medium">{title}</span>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";
