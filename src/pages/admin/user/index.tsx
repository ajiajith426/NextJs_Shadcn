import React from "react";
import {Breadcrumbs} from "@/components/shared-components/breadcrumbs";
import UsersTable from "./user-table";

function UserPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          {title: "Dashboard", link: "/admin/dashboard"},
          {title: "Users", link: "/admin/users"},
        ]}
      />
      <UsersTable />
    </div>
  );
}

export default UserPage;
