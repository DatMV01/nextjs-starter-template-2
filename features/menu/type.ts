import { LucideIcon } from 'lucide-react';

type MenuItemProps = {
  menu: Menu;
};

export type SubMenu = {
  href: string;
  label: string;
};

export type Menu = {
  href: string;
  label: string;
  icon: LucideIcon | undefined;
  submenus?: SubMenu[];
};

type MenuGroupProps = {
  group: {
    groupLabel: string;
    menus: Menu[];
  };
};

export type { MenuGroupProps, MenuItemProps };
