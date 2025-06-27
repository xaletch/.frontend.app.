import { Link } from "@tanstack/react-router";

interface NavbarLinkProps {
  name: string;
  href: string;
  selected?: boolean;
}

export const NavbarLink = ({ name, href, selected=false }: NavbarLinkProps) => {
  return (
    <Link
      to={href}
      className={`flex items-center py-2.5 pl-9 pr-4 rounded-4xl ${selected ? 'bg-gray-2/80' : ''} hover:bg-gray-2/80 duration-200`}
    >
      <div className="leading-3.5 text-[14px] font-normal">{name}</div>
    </Link>
  )
}
