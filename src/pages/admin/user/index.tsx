import React from "react";
import {Breadcrumbs} from "@/components/shared-components/breadcrumbs";
import UsersTable from "../../../sections/user/user-table";
import {fetchUsers} from "@/api/service/userservice";

function UserPage(props: ResponseUserType) {
  console.log("props", props);
  const users = props?.data?.users;
  const totalUsers = props?.data?.total_users;
  const pageCount = Math.ceil(totalUsers / 10);

  return (
    <div>
      <Breadcrumbs
        items={[
          {title: "Dashboard", link: "/admin/dashboard"},
          {title: "Users", link: "/admin/users"},
        ]}
      />
      <UsersTable users={users} pageCount={pageCount} />
    </div>
  );
}

export default UserPage;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetchUsers();
  const data = res;
  // Pass data to the page via props
  return {props: {data}};
}
