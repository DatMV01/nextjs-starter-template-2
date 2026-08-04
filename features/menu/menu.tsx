import { useSidebarStore, useStoreHydration } from "@/features/sidebar";
import { menuGroups } from "./menu-data";
import { MenuGroup } from "./menu-group";

export default function Menu() {

  const isOpen = useStoreHydration(useSidebarStore, (state) => state.isOpen);
  if (isOpen === undefined) return null;

  return (
    <nav className="space-y-6">
      {menuGroups.map((group) => (
        <MenuGroup isOpen={isOpen} key={group.groupLabel || "root"} group={group} />
      ))}
    </nav>
  );
}
