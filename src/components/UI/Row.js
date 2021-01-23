import React from "react";
import clsx from "clsx";
import "./styles.scss";

function Row({ children, className }) {
  return (
    <div className={clsx("row", className)}>
      {children}
    </div>
  );
}

export default Row;