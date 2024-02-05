import React from "react";

const Buttons = ({ children, className, icon }) => {
  return (
    <button
      className={`rounded-md  ${className} flex flex-row gap-1 items-center`}
    >
      {icon()}
      {children}
    </button>
  );
};

export default Buttons;
