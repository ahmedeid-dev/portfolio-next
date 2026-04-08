import { cn } from "@/lib/utils"
import { Trigger } from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react"
import { navigationMenuTriggerStyle } from "./navigation-menu-trigger-style-function"

const NavigationMenuTrigger = forwardRef<
    ComponentRef<typeof Trigger>,
    ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
    <Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), "group", className)}
        {...props}
    >
        {children}{" "}
        <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </Trigger>
))
NavigationMenuTrigger.displayName = Trigger.displayName

export { NavigationMenuTrigger }

