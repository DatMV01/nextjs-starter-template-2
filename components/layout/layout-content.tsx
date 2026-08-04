"use client";

import { Footer, Header } from "@/components/layout";
import { cn } from "@/lib/utils";

export default function ContentLayout({
  title = "Header Title",
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  const isDevBorder = false;

  const styles = {
    headerHeight: "h-14",
    collapsedWidth: "lg:w-20",
    expandedWidth: "lg:w-72",
    collapsedMargin: "lg:ml-20",
    expandedMargin: "lg:ml-72",
  };

  return (
    <>
      <header
        className={cn(
          "flex items-center justify-center",
          styles.headerHeight,
          "border-b-2",
          isDevBorder && "border border-green-700",
        )}
      >
        <Header title={title} />
      </header>
      <div
        className={cn(
          "flex flex-col",
          "h-[calc(100vh-56px-56px)]",
          "w-full",
          "lg:p-8 p-4",
          isDevBorder && "border border-yellow-700",
        )}
      >
        {children}
      </div>
      <footer
        className={cn(
          "flex items-center justify-center",
          styles.headerHeight,
          "border-t-2",
          isDevBorder && "border border-green-700",
        )}
      >
        <Footer />
      </footer>
    </>
  );
}
