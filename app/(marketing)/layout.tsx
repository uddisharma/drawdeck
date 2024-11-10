import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "./_components/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={cn("min-h-screen bg-background", inter.className)}>
          <Navbar />
          {children}
      </div>
  
  );
}
