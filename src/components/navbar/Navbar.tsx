import { AvatarComponent } from '../ui/avatar/avatar-component'
import { NavigationMenuComponent } from '../ui/navigation-menu/navigation-menu-component'

export default function Navbar() {
    return (
        <div className={`bg-zinc-50 p-2  flex justify-between`}>
            <AvatarComponent />
            <NavigationMenuComponent />
        </div>
    )
}
