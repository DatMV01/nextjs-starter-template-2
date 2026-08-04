"use client";

import { Footer, Header, Sidebar } from "@/components/layout";
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

  const dev = {
    border: false,
  };

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
          "absolute top-0 z-20",
          "w-80 h-screen",
          "transition-[width] ease-linear duration-300",
          getOpenState() ? styles.expandedWidth : styles.collapsedWidth,
          dev.border && "border-3 border-red-900",
        )}
      >
        <Sidebar />
      </aside>
      <main
        className={cn(
          "min-h-screen",
          "transition-[margin-left] ease-linear duration-300",
          getOpenState() ? styles.expandedMargin : styles.collapsedMargin,
          dev.border && "border-3 border-blue-900",
        )}
      >
        <header
          className={cn(
            "flex items-center justify-center",
            styles.headerHeight,
            "border-b-2",
            dev.border && "border border-green-700",
          )}
        >
          <Header />
        </header>
        <div
          className={cn(
            "flex flex-col",
            "h-[calc(100vh-56px-56px)]",
            "w-full",
            "p-default",
            dev.border && "border border-yellow-700",
          )}
        >
          {children}
        </div>
        <footer
          className={cn(
            "flex items-center justify-center",
            styles.headerHeight,
            "border-t-2",
            dev.border && "border border-green-700",
          )}
        >
          <Footer />
        </footer>
      </main>
    </>
  );
}
