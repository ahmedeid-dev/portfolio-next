import { cn } from "@/lib/utils"
import { useCarousel } from "./use-carousel"

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div
            ref={carouselRef}
            className="overflow-hidden"
            data-slot="carousel-content"
        >
            <div
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
}

export { CarouselContent }
