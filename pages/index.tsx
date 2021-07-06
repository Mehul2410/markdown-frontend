import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import Cards from "../components/Card/Cards";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Markdown from "../components/markdown/Markdown";
import { API_URL } from "../config";

const index = ({ user, notes }) => {
  const [text, setText] = React.useState("");
  console.log(notes);
  return (
    <BaseLayout>
      <BasePage>
        <Markdown text={text} setText={setText} userEmail={user} />
        <Cards note={notes} />
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { jwt } = parseCookies(ctx);
  let userResponse;
  let authenticateduser = [];
  let notesResponse;

  //if there's no login token then redirect to login page
  if (!jwt) {
    const { res } = ctx;
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  } else {
    const user = await fetch(`${API_URL}/profiles/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    userResponse = await user.json();

    // extract the token from the server size ctx

    const notes = await fetch(`${API_URL}/notes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    notesResponse = await notes.json();
    notesResponse.forEach((element) => {
      element.share.map((item) => {
        if (item === userResponse[0].user.email) {
          authenticateduser.push(element);
        }
      });
    });
  }
  return {
    props: {
      user: userResponse,
      notes: authenticateduser,
    },
  };
};

export default index;
