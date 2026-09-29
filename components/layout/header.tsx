import { NavbarSheet } from '@/features/sidebar';
import { ThemeToggle } from '@/features/theme';

import { cn } from '@/lib/utils';

interface Props {
  ariaLabel?: string;
  title: string;
}

function Header({ title }: Props) {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center px-4 lg:px-8">
      <NavbarSheet />

      <div
        className={cn(
          'flex items-center justify-center',
          'h-full',
          'text-xl font-bold',
        )}
      >
        {title ? title : 'Header'}
      </div>

      <div className="flex h-full flex-1 items-center justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
