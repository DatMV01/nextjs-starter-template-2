import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  ariaLabel?: string;
}

const Menuitems = Array.from({ length: 50 }).map((_, i, a) => {
  const dev = {
    border: false,
  };

  return (
    <li
      key={i}
      className={cn(
        "flex",
        "items-center justify-start",
        "h-12 min-w-0",
        "p-2",
        "rounded-sm",
        "cursor-pointer",
        "hover:border-2 hover:bg-zinc-100/50",
        dev.border && "border border-yellow-500",
      )}
    >
      <span className="truncate">MenuItemMenuItemMenuItemMenuItemMenuItem</span>
    </li>
  );
});

function Sidebar({ ariaLabel }: Props) {
  const dev = {
    border: false,
  };

  const styles = {
    headerHeight: "h-14",
  };

  return (
    <nav className={cn("w-full h-full flex flex-col", dev.border && "border border-red-700")}>
      <div
        className={cn(
          "flex",
          "items-center justify-center",
          styles.headerHeight,
          "border-b-2 border-r-2",
          dev.border && "border border-green-700",
        )}
      >
        Header Sidebar
      </div>

      <ScrollArea
        className={cn(
          "flex flex-col gap-2",
          "flex-1",
          "w-full min-h-0",
          "p-default",
          "border-r-2",
          dev.border && "border border-yellow-700",
        )}
      >
        {Menuitems}
      </ScrollArea>

      <div
        className={cn(
          "flex",
          "items-center justify-center",
          styles.headerHeight,
          "border-t-2 border-r-2",
          dev.border && "border border-green-700",
        )}
      >
        Footer Sidebar
      </div>
    </nav>
  );
}

export default Sidebar;
