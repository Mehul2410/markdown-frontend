import React from "react";

const BasePage = (props) => {
  const { children, className = "" } = props;
  return (
    <div className={`base-page ${className}`}>
      <div className="max-w-screen-xl m-auto px-5 pt-28 h-screen overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default BasePage;
