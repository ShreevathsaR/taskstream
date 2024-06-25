import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import ConvexClientProvider from "@/components/provider/ConvexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taskstream",
  description: "The connected workspace",
  icons:{
    icons:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/logo.png",
        href:"/logo.png",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url:"/logo.png",
        href:"/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
    </html>
  );
}
