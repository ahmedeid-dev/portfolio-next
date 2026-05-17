import { cn } from "@/lib/utils";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { ComponentProps } from "react";

function AvatarImage({
    className,
    ...props
}: ComponentProps<typeof AvatarPrimitive.Image>) {
    return (
        <AvatarPrimitive.Image
            data-slot="avatar-image"
            className={cn(
                "aspect-square size-full rounded-full object-cover",
                className
            )}
            {...props}
        />
    )
}
export { AvatarImage };