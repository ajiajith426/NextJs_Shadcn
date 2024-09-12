import DataTableComponent from "@/components/shared-components/data-table";
import TableSearchInput from "@/components/shared-components/table-search-input";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

type UserTableProps = {
  users?: any;
  page?: number;
  totalUsers?: number;
  pageCount?: number;
};

export default function UsersTable({users, pageCount}: UserTableProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-2 py-5">
        <div className="flex flex-1 gap-4">
          <TableSearchInput />
        </div>
        <div className="flex gap-3">
          <Button className="text-xs md:text-sm bg-white text-black hover:text-white">
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>
      <DataTableComponent data={users} pageCount={pageCount} />
      {/*
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )} */}
    </>
  );
}
