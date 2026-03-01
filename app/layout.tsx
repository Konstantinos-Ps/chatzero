import { getSEOTags, renderSchemaTags } from "@/lib/seo";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = getSEOTags({
  keywords: [
    "chatgpt",
    "deepseek",
    "openrouter",
    "openrouter api key",
    "chat zero",
    "ai chat",
    "google api key",
    "google",
    "openai api key",
    "get your api keys ready",
  ],
  canonicalUrlRelative: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{renderSchemaTags()}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
