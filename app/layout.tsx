import { getSEOTags, renderSchemaTags } from "@/lib/seo";
import { config } from "@/config";
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
  title: `Blazingly-Fast, Open-source, and Free AI Chat App | ${config.appName}`,
  description:
    "Open Source\nPrivacy first (all data stored locally in your browser)\nBring your own API keys (we don't store them)\nChat Navigator - Easily Navigate to any message in the chat\nMulti-model support - Google Gemini, OpenAI, DeepSeek and more will be added soon\nOptimized React codebase (No Unnecessary re-renders)",
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
