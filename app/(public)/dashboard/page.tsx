"use client";

import { useSidebarStore, useStoreHydration } from "@/features/sidebar";

export default function Dashboard() {
  const isOpen = useStoreHydration(useSidebarStore, (state) => state.isOpen);
  if (isOpen === undefined) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <p>Dashboard</p>
      <p> Sidebar status: {isOpen ? "OPEN" : "CLOSE"}</p>
    </div>
  );
}
