import { Navbar } from "@/widgets/navbar"
import type { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="container flex flex-1 relative">
        <Navbar />

        <main className="flex flex-col flex-1 p-14">
          {children}
        </main>
      </div>

    </div>
  )
}
