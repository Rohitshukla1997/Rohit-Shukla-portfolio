import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

import { Geist, Oswald } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "Rohit Shukla MERN Stack & Gen AI Developer ",
  description:
    "MERN Stack & Gen AI Developer focused on building scalable, high-performance web applications and intelligent AI-powered solutions with modern technologies and clean, reliable architectures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable, oswald.variable)}
    >
      <body className="antialiased bg-background text-foreground min-h-screen">
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
