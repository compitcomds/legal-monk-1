"use client"

import * as React from "react"

import one from '../../../assets/1.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'
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
  { title: "My Notes", href: "/notes", icon: one.src }, // Use `.src` to access the image URL
  { title: "Book Notes", href: "/book-notes", icon: two.src },
  { title: "Zero-Cost Programs", href: "/courses", icon: three.src },
];

// Updated resourcesByTopic with new icons
const resourcesByTopic = [
  { title: "Top Mate", href: "/", icon: one.src }, // Use `.src` to access the image URL
  { title: "Community Courses (Join Forces)", href: "/", icon: two.src },
  { title: "Media Coverage", href: "/", icon: three.src },
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
  icon: string; // Updated to accept the image URL (string)
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
          {/* Render the icon as an img element */}
          <img src={icon} alt={title} className="w-10 h-10" />
          <span className="text-xl font-medium">{title}</span>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";
