import React, {useState} from "react";
import Sidebar from "@/components/sidebar/sidebar";

type PropType = {
  children: JSX.Element;
};

function AdminLayoutComponent({children}: PropType) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <main
          className="relative mx-2 my-3 mr-2 flex-1 overflow-hidden rounded-xl focus:outline-none md:mx-0 md:my-4 md:mr-4 
         bg-secondary p-5"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayoutComponent;
