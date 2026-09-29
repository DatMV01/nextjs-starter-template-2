'use client';

import { Menu } from '@/features/menu';
import {
  SidebarLabel,
  useSidebarStore,
  useStoreHydration,
} from '@/features/sidebar';
import { LucideIcon, SquareMenu } from 'lucide-react';

import { cn } from '@/lib/utils';

const SidebarMenuItem = ({
  isOpen,
  icon: Icon,
  label,
}: {
  isOpen: boolean;
  icon: LucideIcon;
  label: string;
}) => {
  return (
    <li
      className={cn(
        'flex items-center justify-start gap-2',
        'h-12 min-w-0 cursor-pointer rounded-sm p-2',
        'border-2 border-transparent transition-colors hover:border-zinc-300 hover:bg-zinc-100/50',
      )}
    >
      <Icon className="size-6 shrink-0" />
      <SidebarLabel isOpen={isOpen}>{label}</SidebarLabel>
    </li>
  );
};

const SidebarMenuItemsOld = () => {
  const isOpen = useStoreHydration(useSidebarStore, (state) => state.isOpen);
  if (isOpen === undefined) return null;

  return (
    <ul className="flex flex-col gap-1">
      {Array.from({ length: 50 }).map((_, i) => (
        <SidebarMenuItem
          key={`menu-item11-${i}`}
          isOpen={isOpen}
          icon={SquareMenu}
          label="MenuItemMenuItemMenuItemMenuItemMenuItem"
        />
      ))}
    </ul>
  );
};

const SidebarMenuItems = () => {
  return <Menu />;
};

export default SidebarMenuItems;
