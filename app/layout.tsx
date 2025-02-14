import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linked Genie",
  description:
    "A simple extension that will help you to interact with LinkedIn Posts in a more efficient way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="Linked Genie"
      />
      <meta
        property="og:url"
        content="http://localhost:3000/"
      />
      <meta name="twitter:image" content="/opengraph.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={FigtreeFont.className}>
        {children}
      </body>
    </html>
  );
}
