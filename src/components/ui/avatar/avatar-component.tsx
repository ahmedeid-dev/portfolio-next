import Link from "next/link";
import { Avatar } from "./chunks/avatar";
import { AvatarFallback } from "./chunks/avatar-fallback";
import { AvatarImage } from "./chunks/avatar-image";

export function AvatarComponent() {
    return (
        <Link href={"/"}>
            <Avatar size="lg">
                <AvatarImage
                    src="images/myImage.webp"
                    alt="Ahmed Eid Avatar"
                />
                <AvatarFallback>AE</AvatarFallback>
            </Avatar>
        </Link>
    )
}
