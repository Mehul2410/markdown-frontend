import React from "react";
import Header from "../shared/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-primary">
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
