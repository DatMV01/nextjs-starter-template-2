import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogOut, MenuIcon, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import SidebarLabel from "./sidebar-label";
import SidebarMenuItems from "./sidebar-menuItem";

export function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger
        className="lg:hidden mr-4"
        render={
          <Button variant="outline" size="icon-lg" className="rounded-sm">
            <MenuIcon />
          </Button>
        }
      />
      <SheetContent className="flex flex-col gap-0" side="left">
        <SheetHeader className="h-14 border-b">
          <Button className="flex justify-center items-center" variant="link">
            <Link href="/dashboard" className="flex items-center gap-2">
              <PanelsTopLeft className="size-6 shrink-0" />
              <SheetTitle className="font-bold text-lg">Brand</SheetTitle>
            </Link>
          </Button>
        </SheetHeader>

        <ScrollArea className={cn("flex flex-col gap-2", "flex-1", "w-full min-h-0", "p-2")}>
          <SidebarMenuItems />
        </ScrollArea>
        <SheetFooter className="h-14 border-t">
          <SheetClose
            render={
              <Button
                variant="ghost"
                className="flex w-full items-center justify-center gap-2"
                onClick={() => alert("Logout")}
              >
                <LogOut className="size-6 shrink-0" />
                <SidebarLabel isOpen={true} className="font-bold text-lg">
                  Logout
                </SidebarLabel>
              </Button>
            }
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSheet;
