import type { Metadata } from "next";
import { ReactQueryProvider } from "@/providers/index";
import "./globals.css";


export const metadata: Metadata = {
  title: "YBIZ",
  description: "YBIZ community is a business curated marketplace for startups and aspiring entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
