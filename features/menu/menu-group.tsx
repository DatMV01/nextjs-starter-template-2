import { Ellipsis } from 'lucide-react';

import { MenuItem } from './menu-item';
import { MenuGroupProps } from './type';

export function MenuGroup({
  group,
  isOpen,
}: MenuGroupProps & { isOpen: boolean }) {
  return (
    <section className="space-y-2">
      {group.groupLabel &&
        group.groupLabel != '' &&
        (isOpen ? (
          <h2 className="text-muted-foreground px-3 text-xs font-semibold uppercase">
            {group.groupLabel}
          </h2>
        ) : (
          <div className="flex w-full items-center justify-center">
            <Ellipsis className="size-6" />
          </div>
        ))}

      <ul className="space-y-1">
        {group.menus.map((menu) => (
          <MenuItem isOpen={isOpen} key={menu.label} menu={menu} />
        ))}
      </ul>
    </section>
  );
}
