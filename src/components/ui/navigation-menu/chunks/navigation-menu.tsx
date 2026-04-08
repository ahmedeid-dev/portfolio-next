import { cn } from "@/lib/utils"
import { Root } from "@radix-ui/react-navigation-menu"
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react"

const NavigationMenu = forwardRef<
    ComponentRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref) => (
    <Root
        ref={ref}
        className={cn(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            className
        )}
        {...props}
    >
        {children}
    </Root>
))
NavigationMenu.displayName = Root.displayName

export { NavigationMenu }

