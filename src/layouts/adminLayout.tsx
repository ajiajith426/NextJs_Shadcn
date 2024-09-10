import React from "react";

type PropType = {
  children: JSX.Element;
};

function AdminLayoutComponent({children}: PropType) {
  return (
    <div>
      <div>Admin Layout</div>
      <div>{children}</div>
    </div>
  );
}

export default AdminLayoutComponent;
