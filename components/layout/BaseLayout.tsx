import React from "react";
import Header from "../shared/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-primary dark:bg-newBlack h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
