import { cn } from "@/lib/utils";

type SidebarLabelProps = {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
};

function SidebarLabel({ children, isOpen, className }: SidebarLabelProps) {
  return (
    <span
      className={cn(
        "truncate whitespace-nowrap",
        "transition-[transform,opacity,display] duration-300 ease-linear",
        isOpen ? "inline opacity-100" : "hidden opacity-0",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default SidebarLabel;
