import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config/site";

import "@/styles/globals.css";
import { env } from "@/env";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const readaction = localFont({
  display: "swap",
  src: "../../public/redaction-35-regular.woff2",
  variable: "--font-redaction",
});

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  applicationName: config.name,
  authors: [{ name: config.author.name, url: config.author.url }],
  category: "technology",
  creator: config.author.name,
  description: config.description,
  generator: "Next.js",
  keywords: config.keywords as unknown as string[],
  metadataBase: new URL(config.url),
  openGraph: {
    description: config.description,
    locale: "en_US",
    siteName: config.name,
    title: config.title,
    type: "website",
    url: config.url,
  },
  publisher: config.author.name,
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: config.title,
    template: `%s — ${config.name}`,
  },
  twitter: {
    card: "summary_large_image",
    description: config.description,
    title: config.title,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
    { color: "#0a0a0a", media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} ${readaction.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="relative scroll-smooth bg-background font-sans text-base text-foreground antialiased selection:bg-foreground selection:text-background">
        <div className="relative isolate flex min-h-svh flex-col">
          <ThemeProvider>
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

function TailwindIndicator() {
  if (env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full bg-foreground p-3 font-mono text-background text-xs">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
