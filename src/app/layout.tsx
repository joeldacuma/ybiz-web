import type { Metadata } from "next";
import { ReactQueryProvider } from "@/providers/index";
import "./globals.css";


export const metadata: Metadata = {
  title: "YBIZ - Curated Community for Entrepreneurs",
  description: "YBIZ community is a business curated marketplace for startups and aspiring entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <ReactQueryProvider>
          <div>
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
