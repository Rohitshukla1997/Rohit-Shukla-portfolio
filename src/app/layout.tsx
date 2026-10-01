import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#06b6d4",
  width: "device-width",
  initialScale: 1,
};
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

import { Geist, Oswald } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitshukla.vercel.app/"),
  title:
    "Rohit Shukla | Full Stack Developer | React, Next.js, Node.js & AI Software Engineer",
  description:
    "I am Rohit Shukla, a Full Stack Developer from Nagpur. I specialize in building scalable, modern web applications using React.js, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Rohit Shukla",
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Software Engineer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Generative AI Engineer",
    "Nagpur",
    "MongoDB",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Rohit Shukla", url: "https://rohitshukla.vercel.app/" }],
  creator: "Rohit Shukla",
  publisher: "Rohit Shukla",
  alternates: {
    canonical: "/",
  },

  verification: {
    other: {
      "msvalidate.01": "GXoeimY4ZlKQTYvGhkpeGmNKh5xcH6SMykwHtkrSNhY",
    },
  },
  openGraph: {
    title:
      "Rohit Shukla | Full Stack Developer | React, Next.js, Node.js & AI Software Engineer",
    description:
      "I am Rohit Shukla, a Full Stack Developer from Nagpur. I specialize in building scalable, modern web applications using React.js, Next.js, Node.js, and AI Software Engineer.",
    url: "https://rohitshukla.vercel.app/",
    siteName: "Rohit Shukla Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/image/proimg.jpeg",
        width: 800,
        height: 800,
        alt: "Rohit Shukla - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rohit Shukla | Full Stack Developer | React, Next.js, Node.js & AI Software Engineer",
    description:
      "I am Rohit Shukla, a Full Stack Developer from Nagpur. I specialize in building scalable, modern web applications using React.js, Next.js, Node.js, and AI Software Engineer.",
    images: ["/image/proimg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rohit Shukla",
    jobTitle: "Full Stack Developer",
    url: "https://rohitshukla.vercel.app/",
    description:
      "Rohit Shukla is a Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js and MongoDB and AI Software Engineer.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "REST APIs",
      "WebSockets",
    ],
    sameAs: [
      "https://github.com/Rohitshukla1997",
      "https://www.linkedin.com/in/rohit-shukla-221601218/",
      "https://tal.club/meet/rohit-shukla-2",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable, oswald.variable)}
    >
      <body className="antialiased bg-background text-foreground min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
