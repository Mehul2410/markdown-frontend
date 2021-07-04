import React from "react";
import Yamde from "yamde";

const Markdown = ({ text, isLightMode, setText }) => {
  return (
    <div className="prose">
      <Yamde
        value={text}
        handler={setText}
        theme={isLightMode ? "light" : "dark"}
      />
    </div>
  );
};

export default Markdown;
