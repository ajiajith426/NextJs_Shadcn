import React from "react";
import {Breadcrumbs} from "@/components/shared-components/breadcrumbs";
import UserFormComponent from "../userForm";

function CreateUser() {
  return (
    <div>
      <Breadcrumbs
        items={[
          {title: "Dashboard", link: "/admin/dashboard"},
          {title: "Users", link: "/admin/user"},
          {title: "Create", link: "/admin/user/create"},
        ]}
      />
      <div className="space-y-2 py-10 text-center">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
          Create User
        </h2>
        <p className="text-sm text-muted-foreground">User form creation</p>
      </div>
      <UserFormComponent />
    </div>
  );
}

export default CreateUser;
