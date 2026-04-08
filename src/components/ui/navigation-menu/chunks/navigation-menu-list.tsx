import { cn } from "@/lib/utils"
import { List } from "@radix-ui/react-navigation-menu"
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react"

const NavigationMenuList = forwardRef<
    ComponentRef<typeof List>,
    ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
    <List
        ref={ref}
        className={cn(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            className
        )}
        {...props}
    />
))
NavigationMenuList.displayName = List.displayName

export { NavigationMenuList }

