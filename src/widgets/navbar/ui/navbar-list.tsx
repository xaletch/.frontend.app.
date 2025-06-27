import type { PropsWithChildren } from "react"

export const NavbarList = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col">{children}</div>
    </div>
  )
}
