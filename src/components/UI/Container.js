import React from "react";
import clsx from "clsx";
import "./styles.scss";

function Container({ children, className, fluid }) {
  return (
    <div className={clsx(fluid ? "container-fluid" : "container", className)}>
      {children}
    </div>
  );
}

export default Container;