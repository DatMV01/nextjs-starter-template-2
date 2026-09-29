'use client';

import Link from 'next/link';

import {
  SidebarLabel,
  SidebarMenuItems,
  SidebarToggle,
  useSidebarStore,
  useStoreHydration,
} from '@/features/sidebar';
import { LogOut, PanelsTopLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

function Sidebar() {
  const getOpenState = useStoreHydration(
    useSidebarStore,
    (state) => state.getOpenState,
  );
  if (getOpenState == undefined) return null;

  const isDevBorder = false;
  const headerHeight = 'h-14';

  const sectionClass = cn('flex items-center justify-center', headerHeight);
  return (
    <nav
      className={cn(
        'relative',
        'flex h-full w-full flex-col',
        isDevBorder && 'border border-red-700',
      )}
    >
      <SidebarToggle />

      <div
        className={cn(
          sectionClass,
          'border-r-2 border-b-2',
          isDevBorder && 'border border-green-700',
        )}
      >
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2"
        >
          <PanelsTopLeft className="size-6" />

          <h1
            className={cn(
              'text-lg font-bold whitespace-nowrap',
              'transition-[transform,opacity,display] duration-300 ease-linear',
              getOpenState() ? 'inline opacity-100' : 'hidden opacity-0',
            )}
          >
            Sidebar Header
          </h1>
        </Link>
      </div>

      <ScrollArea
        className={cn(
          'flex flex-col gap-2',
          'flex-1',
          'min-h-0 w-full',
          'p-default',
          'border-r-2',
          isDevBorder && 'border border-yellow-700',
        )}
      >
        <SidebarMenuItems />
      </ScrollArea>

      <div
        className={cn(
          sectionClass,
          'border-t-2 border-r-2',
          isDevBorder && 'border border-green-700',
        )}
      >
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2"
          onClick={() => alert('Logout')}
        >
          <LogOut className="size-6 shrink-0" />
          <SidebarLabel isOpen={getOpenState()} className="text-lg font-bold">
            Logout
          </SidebarLabel>
        </Button>
      </div>
    </nav>
  );
}

export default Sidebar;
