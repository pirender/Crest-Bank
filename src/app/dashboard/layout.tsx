import type { Metadata } from "next";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashTopBar from "@/components/Dashboard/DashTopBar";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "User Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 bg-[#e2ebf7] md:pt-24 md:px-8 overflow-hidden">
        <DashTopBar />
        {children}
      </main>
    </div>
  );
}