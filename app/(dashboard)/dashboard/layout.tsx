import React from "react";
import { Sidebar } from "../dashboard/_components/sidebar";
import { Navbar } from "../dashboard/_components/navbar";
import { OrgSidebar } from "../dashboard/_components/org-sidebar";
import { DashboardLayoutProps } from "../layout";

const layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
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
    </>
  );
};

export default layout;
