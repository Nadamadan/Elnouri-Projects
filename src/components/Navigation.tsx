"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  items: {
    id: string;
    name: string;
  }[];
}

const sample: NavigationProps["items"] = [
  { id: "1", name: "Getting started" },
  { id: "2", name: "Primitives" },
  { id: "3", name: "Components" },
  { id: "4", name: "Patterns" },
  { id: "5", name: "Templates" },
  { id: "6", name: "Resources" },
  { id: "7", name: "Guides" },
  { id: "8", name: "API Reference" },
  { id: "9", name: "FAQ" },
  { id: "10", name: "Support" },
];

export function Navigation() {
  const navItems = sample.slice(0, 3);
  const secondaryItems = sample.slice(3, 5);
  const menuItems = sample.slice(5);

  return (
    <NavigationMenu className="max-sm:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavMenuLink id={"#"} text={"All"} />
        </NavigationMenuItem>

        {navItems.map((el) => (
          <NavigationMenuItem key={el.id}>
            <NavMenuLink id={el.id} text={el.name} />
          </NavigationMenuItem>
        ))}

        {secondaryItems.map((el) => (
          <NavigationMenuItem key={el.id} className="max-lg:hidden">
            <NavMenuLink id={el.id} text={el.name} />
          </NavigationMenuItem>
        ))}

        {menuItems.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                {menuItems.map((el) => (
                  <li key={el.id}>
                    <NavMenuLink id={el.id} text={el.name} />
                  </li>
                ))}
                {secondaryItems.map((el) => (
                  <NavigationMenuItem key={el.id} className="lg:hidden">
                    <NavMenuLink id={el.id} text={el.name} />
                  </NavigationMenuItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
      {secondaryItems.map(({ id, name }) => (
        <NavigationMenuItem key={id} className="lg:hidden">
          <NavMenuLink id={id} text={name} />
        </NavigationMenuItem>
      ))}
    </NavigationMenu>
  );
}

const NavMenuLink = ({ id, text }: { id: string; text: string }) => {
  // create query string from id named 'type'

  return (
    <Link href={"#"} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {text}
      </NavigationMenuLink>
    </Link>
  );
};
