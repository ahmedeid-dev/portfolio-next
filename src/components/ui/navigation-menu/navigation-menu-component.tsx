"use client"
import { Item, Link as RadixLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { NavigationMenu } from "./chunks/navigation-menu";
import { NavigationMenuList } from "./chunks/navigation-menu-list";
import { navigationMenuTriggerStyle } from "./chunks/navigation-menu-trigger-style-function";

const NavigationMenuLink = RadixLink;
NavigationMenuLink.displayName = RadixLink.displayName;
const NavigationMenuItem = Item
NavigationMenuItem.displayName = Item.displayName;

export function NavigationMenuComponent() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#skills">Skills</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};
