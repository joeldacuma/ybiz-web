import type { Metadata } from "next";
import { ReactQueryProvider } from "@/providers/index";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "YBIZ - Curated Community for Entrepreneurs",
  description:
    "YBIZ community is a business curated marketplace for startups and aspiring entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className="scroll-smooth" lang="en">
        <body className="bg-gray-100">
          <ReactQueryProvider>
            <main>{children}</main>
            <Toaster />
          </ReactQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
