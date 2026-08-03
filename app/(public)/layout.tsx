import { Header, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dev = {
    border: false,
  };

  const styles = {
    headerHeight: "h-14",
  };

  return (
    <>
      <aside className={cn("absolute top-0 z-20", "w-80 h-screen", dev.border && "border-3 border-red-900")}>
        <Sidebar />
      </aside>
      <main className={cn("ml-80", "min-h-screen", dev.border && "border-3 border-blue-900")}>
        <header
          className={cn(
            "flex",
            "items-center justify-center",
            styles.headerHeight,
            "border-b-2",
            dev.border && "border border-green-700",
          )}
        >
          <Header />
        </header>
        <div
          className={cn("flex flex-col ", "h-[calc(100vh-56px-56px)]", "w-full", "p-default", dev.border && "border border-yellow-700")}
        >
          {children}
        </div>
        <footer
          className={cn(
            "flex",
            "items-center justify-center",
            styles.headerHeight,
            "border-t-2",
            dev.border && "border border-green-700",
          )}
        >
          <Footer />
        </footer>
      </main>
    </>
  );
}
