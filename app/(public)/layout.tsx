"use client";

import { Sidebar } from "@/components/layout";
import { useSidebarStore, useStoreHydration } from "@/features/sidebar";
import { cn } from "@/lib/utils";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarStore = useStoreHydration(useSidebarStore, (state) => state);
  if (!sidebarStore) return null;
  const { getOpenState } = sidebarStore;

  const isDevBorder = false;

  const styles = {
    headerHeight: "h-14",
    collapsedWidth: "lg:w-20",
    expandedWidth: "lg:w-72",
    collapsedMargin: "lg:ml-20",
    expandedMargin: "lg:ml-72",
  };

  return (
    <>
      <aside
        className={cn(
          "hidden lg:block",
          "absolute top-0 left-0 z-20",
          "w-80 h-screen",
          "transition-[width] ease-linear duration-300",
          getOpenState() ? styles.expandedWidth : styles.collapsedWidth,
          isDevBorder && "border-3 border-red-900",
        )}
      >
        <Sidebar />
      </aside>
      <main
        className={cn(
          "min-h-screen",
          "transition-[margin-left] ease-linear duration-300",
          getOpenState() ? styles.expandedMargin : styles.collapsedMargin,
          isDevBorder && "border-3 border-blue-900",
        )}
      >
        {children}
      </main>
    </>
  );
}
