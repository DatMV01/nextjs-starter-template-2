import { NavbarSheet } from "@/features/sidebar";
import { ThemeToggle } from "@/features/theme";
import { cn } from "@/lib/utils";

interface Props {
  ariaLabel?: string;
  title: string;
}

function Header({ title }: Props) {
  return (
    <div className="h-full flex items-center justify-center flex-row w-full lg:px-8 px-4">
      <NavbarSheet />

      <div className={cn("flex justify-center items-center", "h-full", "font-bold text-xl")}>
        {title ? title : "Header"}
      </div>

      <div className="h-full   items-center flex-1 flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
