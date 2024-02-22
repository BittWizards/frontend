interface INavbarLinkProps {
  text: string;
  to: string;
  icon?: string;
}

interface INavbarProps {
  links: INavbarLinkProps[];
}

export type { INavbarLinkProps, INavbarProps };
