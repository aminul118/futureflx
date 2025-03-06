import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "FutureFLX - Web & App Development Services",
  description:
    "FutureFLX provides web and Android application support, application development, design, and SEO services.",
  keywords: [
    "FutureFLX",
    "web development",
    "app development",
    "SEO services",
    "Next.js",
    "React",
    "Android development",
    "FutureFlx",
    "futureflx",
  ],
  authors: [{ name: "Md Aminul Islam", url: "https://futureflx.com" }],
  applicationName: "FutureFLX",
  metadataBase: new URL("https://futureflx.com"),
  openGraph: {
    title: "FutureFLX - Web & App Development Services",
    description:
      "FutureFLX specializes in web and Android app development, design, and SEO services.",
    url: "https://futureflx.com",
    siteName: "FutureFLX",
    images: [
      {
        url: "https://www.futureflx.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "FutureFLX - Web & App Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureFLX - Web & App Development",
    description:
      "Professional web and Android app development services by FutureFLX.",
    images: ["https://www.futureflx.com/favicon.png"],
  },
};

export type ChildrenType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: ChildrenType) => {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className="bg-gray-200">{children}</body>
    </html>
  );
};

export default RootLayout;
