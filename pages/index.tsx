import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import Cards from "../components/markdown/Cards";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Markdown from "../components/markdown/Markdown";

const index = ({ user }) => {
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
        <Cards />
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { jwt } = parseCookies(ctx);

  const user = await fetch("http://localhost:1337/profiles/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const userResponse = await user.json();
  // extract the token from the server size ctx

  //if there's no login token then redirect to login page
  if (!jwt) {
    const { res } = ctx;
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  }
  return {
    props: {
      user: userResponse,
    },
  };
};

export default index;
