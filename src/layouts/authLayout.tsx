import React from "react";

type PropType = {
  children: JSX.Element;
};

function AuthLayoutComponent({children}: PropType) {
  return <div>{children}</div>;
}

export default AuthLayoutComponent;
