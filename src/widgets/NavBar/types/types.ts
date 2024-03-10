interface INavbarLinkProps {
  text: string;
  to: string;
  icon?: string;
  notification: number;
}

interface INavbarProps {
  links: INavbarLinkProps[];
}

export type { INavbarLinkProps, INavbarProps };
