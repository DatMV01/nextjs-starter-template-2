"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarLabel, SidebarMenuItems, SidebarToggle, useSidebarStore, useStoreHydration } from "@/features/sidebar";
import { cn } from "@/lib/utils";
import { LogOut, PanelsTopLeft } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  const getOpenState = useStoreHydration(useSidebarStore, (state) => state.getOpenState);
  if (getOpenState == undefined) return null;

  const isDevBorder = false;
  const headerHeight = "h-14";

  const sectionClass = cn("flex items-center justify-center", headerHeight);
  return (
    <nav className={cn("relative", "w-full h-full flex flex-col", isDevBorder && "border border-red-700")}>
      <SidebarToggle />

      <div className={cn(sectionClass, "border-b-2 border-r-2", isDevBorder && "border border-green-700")}>
        <Link href="/dashboard" className="flex items-center justify-center gap-2">
          <PanelsTopLeft className="size-6" />

          <h1
            className={cn(
              "font-bold text-lg whitespace-nowrap",
              "transition-[transform,opacity,display] ease-linear duration-300",
              getOpenState() ? "inline opacity-100" : "hidden opacity-0",
            )}
          >
            Sidebar Header
          </h1>
        </Link>
      </div>

      <ScrollArea
        className={cn(
          "flex flex-col gap-2",
          "flex-1",
          "w-full min-h-0",
          "p-default",
          "border-r-2",
          isDevBorder && "border border-yellow-700",
        )}
      >
        <SidebarMenuItems />
      </ScrollArea>

      <div className={cn(sectionClass, "border-t-2 border-r-2", isDevBorder && "border border-green-700")}>
        <Button variant="ghost" className="flex items-center justify-center gap-2" onClick={() => alert("Logout")}>
          <LogOut className="size-6 shrink-0" />
          <SidebarLabel isOpen={getOpenState()} className="font-bold text-lg">
            Logout
          </SidebarLabel>
        </Button>
      </div>
    </nav>
  );
}

export default Sidebar;
