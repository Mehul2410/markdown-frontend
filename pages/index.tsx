import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import ReactMarkdown from "react-markdown";
import Yamde from "yamde";
import { GetServerSideProps } from "next";

const index = () => {
  const [isLightMode, setIsLightMode] = React.useState(true);
  const [text, setText] = React.useState("exampleContent");
  return (
    <BaseLayout>
      <BasePage>
        <div
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => setIsLightMode(!isLightMode)}
        >
          {`${isLightMode ? "Dark" : "Light"} Mode`}
        </div>

        <Yamde
          value={text}
          handler={setText}
          theme={isLightMode ? "light" : "dark"}
        />
        <ReactMarkdown>{text}</ReactMarkdown>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let a;
  return {
    props: {
      a,
    },
  };
};

export default index;
