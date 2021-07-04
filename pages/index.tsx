import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import Cards from "../components/markdown/Cards";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Markdown from "../components/markdown/Markdown";

const index = ({ user, notes }) => {
  console.log(notes);
  console.log(user);
  if (notes == user[0].user.email) {
    console.log("hey");
  }

  // console.log(
  //   notes[0].share.filter((item) => item.includes(user[0].user.email))
  // );
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
  const notes = await fetch("http://localhost:1337/notes", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const notesResponse = await notes.json();

  // if (notesResponse[0].share[0] === userResponse[0].user.email) {
  //   m = notesResponse;
  // } else {
  //   m = null;
  // }
  const m = notesResponse[0].share.filter(
    (item) => item == userResponse[0].user.email
  );
  let authenticateduser;
  if (m == userResponse[0].user.email) {
    authenticateduser = notesResponse;
  } else {
    authenticateduser = null;
  }
  // let myNotes;
  // if(notesResponse[0].)

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
      notes: authenticateduser,
    },
  };
};

export default index;
