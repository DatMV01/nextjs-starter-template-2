"use client";

import { Menu } from "@/features/menu";
import { SidebarLabel, useSidebarStore, useStoreHydration } from "@/features/sidebar";
import { cn } from "@/lib/utils";
import { LucideIcon, SquareMenu } from "lucide-react";

const SidebarMenuItem = ({ isOpen, icon: Icon, label }: { isOpen: boolean; icon: LucideIcon; label: string }) => {
  return (
    <li
      className={cn(
        "flex items-center justify-start gap-2",
        "h-12 min-w-0 p-2 rounded-sm cursor-pointer",
        "border-2 border-transparent hover:bg-zinc-100/50 hover:border-zinc-300 transition-colors",
      )}
    >
      <Icon className="size-6 shrink-0 " />
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
