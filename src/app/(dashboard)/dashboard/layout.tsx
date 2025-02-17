import DashboardSidebar from "@/components/shared/DashboardSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktheruzzaman",
  description: "Akther uz zaman portfolio website",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto grid grid-cols-12">
      <div className="col-span-3">
        <DashboardSidebar />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
