"use client";

import "katex/dist/katex.min.css";
import { Toaster } from "@/frontend/components/ui/sonner";
import { ThemeProvider } from "@/frontend/components/ui/ThemeProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </>
  );
}
