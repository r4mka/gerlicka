import React from "react"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
