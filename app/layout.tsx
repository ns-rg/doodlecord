import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoodleCord",
  description:
    "DoodleCord is a collaborative platform for creating workspaces, communicating via text and audio, sharing media, and brainstorming with a virtual whiteboard. Perfect for seamless personal and professional collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="doodlecord-theme">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
