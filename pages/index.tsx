import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import ReactMarkdown from "react-markdown";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Markdown from "../components/markdown/Markdown";

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
        <Markdown text={text} setText={setText} isLightMode={isLightMode} />
        <ReactMarkdown className="prose">{text}</ReactMarkdown>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // extract the token from the server size ctx
  const { jwt } = parseCookies(ctx);
  //if there's no login token then redirect to login page
  if (!jwt) {
    const { res } = ctx;
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  }
  return {
    props: {},
  };
};

export default index;
