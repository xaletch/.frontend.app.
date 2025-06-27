import { PlusCircleIcon } from "@/shared/icons"
import { NavbarList } from "./navbar-list"
import { NavbarLink } from "@/features/navbar"

export const Navbar = () => {
  return (
    <div className="sticky top-0 py-8 z-10 border-b border-r sm:border-b border-gray-contrast">
      <aside className="w-full sm:w-63.5 h-full p-8 rounded-5xl">
        <nav className="flex flex-col gap-8">
          <div>
            <div className="flex items-center py-0.5">
              <span className="min-w-6 h-6"><PlusCircleIcon /></span>
              <span className="ml-3 text-sm font-medium">Начать</span>
            </div>
            <NavbarList>
              <NavbarLink name={"НАЗВАНИЕ"} href={"/"} />
            </NavbarList>
          </div>
          {/* <div>
            <div className="flex items-center">
              <span className="min-w-6 h-6"><ListIcon /></span>
              <span className="ml-3 text-sm font-medium">Моя подготовка</span>
            </div>
          </div> */}
        </nav>
      </aside>
    </div>
  )
}
