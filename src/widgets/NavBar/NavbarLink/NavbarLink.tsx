import type { FC } from "react"
import { NavLink } from "react-router-dom"

interface INavbarLinkProps {
  text: string
  to: string
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const NavbarLink: FC<INavbarLinkProps> = ({ text, to, Icon }) => (
  <NavLink to={to} end>
    {Icon && <Icon />}
    {text}
  </NavLink>
)

export default NavbarLink
