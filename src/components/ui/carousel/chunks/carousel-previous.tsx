"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon } from "lucide-react"
import { ComponentProps } from "react"
import { useCarousel } from "./use-carousel"


function CarouselPrevious({
    className,
    variant = "outline",
    size = "icon-sm",
    ...props
}: ComponentProps<typeof Button>) {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button
            data-slot="carousel-previous"
            variant={variant}
            size={size}
            className={cn(
                "absolute touch-manipulation rounded-full",
                orientation === "horizontal"
                    ? "top-1/2 -start-12 -translate-y-1/2"
                    : "-top-12 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ChevronLeftIcon className="rtl:rotate-180" />
            <span className="sr-only">Previous slide</span>
        </Button>
    )
}

export { CarouselPrevious }

