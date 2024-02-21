import type { FC } from "react"

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: FC<NavbarProps> = ({ children }) => <nav>{children}</nav>

export default Navbar
