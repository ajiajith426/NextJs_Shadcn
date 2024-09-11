import {Breadcrumbs} from "@/components/shared-components/breadcrumbs";
import React from "react";

function DashboardPage() {
  return (
    <div>
      <Breadcrumbs items={[{title: "Dashboard", link: "/admin/dashboard"}]} />
    </div>
  );
}

export default DashboardPage;
