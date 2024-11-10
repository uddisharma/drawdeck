import { Sidebar } from "./dashboard/_components/sidebar";
import { Navbar } from "./dashboard/_components/navbar";
import { OrgSidebar } from "./dashboard/_components/org-sidebar";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Suspense fallback={<Loading />}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          <Sidebar />
          <div className="pl-[60px] h-full">
            <div className="flex gap-x-3 h-full">
              <OrgSidebar />
              <div className="h-full flex-1">
                <Navbar />
                {children}
              </div>
            </div>
          </div>
        </ConvexClientProvider>
      </Suspense>

    </main>
  );
};

export default DashboardLayout;
