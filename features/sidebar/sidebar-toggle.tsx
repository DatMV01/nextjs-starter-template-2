'use client';

import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { useSidebarStore } from './hooks/use-sidebarStore';
import { useStoreHydration } from './hooks/use-storeHydration';

export default function SidebarToggle() {
  const sidebarStore = useStoreHydration(useSidebarStore, (state) => state);
  if (!sidebarStore) return null;
  const { isOpen, toggleOpen } = sidebarStore;

  return (
    <Button
      onClick={toggleOpen}
      variant="secondary"
      className={cn(
        'absolute top-3 -right-4 z-20',
        'size-8 rounded-md',
        'invisible lg:visible',
        'transition-transform duration-300 ease-in-out',
        'border-input cursor-pointer',
      )}
    >
      <ChevronLeft
        className={cn(
          'h-4 w-4 transition-transform duration-700 ease-in-out',
          isOpen ? 'rotate-0' : 'rotate-180',
        )}
      />
    </Button>
  );
}
