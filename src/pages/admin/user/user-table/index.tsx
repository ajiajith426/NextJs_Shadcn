// import DataTable from "@/components/shared/data-table";
// import {columns} from "./columns";
// import StudentTableActions from "./student-table-action";

type UserTableProps = {
  users?: any;
  page?: number;
  totalUsers?: number;
  pageCount?: number;
};

export default function UsersTable({users, pageCount}: UserTableProps) {
  return (
    <>
      sfsaf
      {/* <StudentTableActions />
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )} */}
    </>
  );
}
