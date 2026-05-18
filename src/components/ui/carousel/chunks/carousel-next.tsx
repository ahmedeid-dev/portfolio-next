"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import { ComponentProps } from "react"
import { useCarousel } from "./use-carousel"

function CarouselNext({
    className,
    variant = "outline",
    size = "icon-sm",
    ...props
}: ComponentProps<typeof Button>) {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
        <Button
            data-slot="carousel-next"
            variant={variant}
            size={size}
            className={cn(
                "absolute touch-manipulation rounded-full",
                orientation === "horizontal"
                    ? "top-1/2 -end-12 -translate-y-1/2"
                    : "-bottom-12 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ChevronRightIcon className="rtl:rotate-180" />
            <span className="sr-only">Next slide</span>
        </Button>
    )
}

export { CarouselNext }

