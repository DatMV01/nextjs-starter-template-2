import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MenuItemProps } from './type';

export function MenuItem({
  menu,
  isOpen,
}: MenuItemProps & { isOpen: boolean }) {
  const pathname = usePathname();
  const { icon: Icon, href, label } = menu;
  const hasSubmenu = menu.submenus && menu.submenus.length > 0;
  const isActive = pathname.endsWith(menu.href);

  if (!hasSubmenu) {
    return (
      <li>
        <Link
          href={href}
          className={cn(
            'flex items-center',
            isOpen ? 'justify-start' : 'justify-center',
            'h-12 w-full',
            'gap-2 px-2',
            'rounded-sm',
            isActive && 'bg-foreground/10',
            !isActive && 'hover:bg-accent',
          )}
        >
          {Icon && <Icon className="size-6 shrink-0" />}
          {isOpen && <span>{label}</span>}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <details className="group">
        <summary
          className={cn(
            'flex items-center justify-between',
            'px-2 py-2',
            'hover:bg-accent cursor-pointer',
          )}
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="size-6 shrink-0" />}
            <span>{menu.label}</span>
          </div>

          <ChevronDown className="size-6 transition group-open:rotate-180" />
        </summary>

        <ul className="mt-1 ml-7 space-y-1">
          {menu.submenus!.map((submenu) => (
            <MenuItem
              key={submenu.href}
              isOpen={true}
              menu={{
                icon: undefined,
                href: submenu.href,
                label: submenu.label,
              }}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}
