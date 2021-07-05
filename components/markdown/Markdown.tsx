import React from "react";
import Yamde from "yamde";
import { parseCookies } from "nookies";

const Markdown = ({ text, isLightMode, setText, userEmail }) => {
  const { jwt } = parseCookies();
  const firstName = userEmail[0].firstName;
  const email = userEmail[0].user.email;
  const noteBody = {
    author: firstName,
    notes: text,
    share: [email],
  };
  async function submitNote() {
    try {
      const sendNote = await fetch("http://localhost:1337/notes", {
        method: "POST",
        body: JSON.stringify(noteBody),
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }).then(() => {
        location.reload();
      });
    } catch (error) {
      console.log("something went wrong");
    }
  }
  return (
    <div
      className={`relative prose m-auto ${
        isLightMode ? "bg-white" : " bg-black"
      }  p-5 rounded-lg`}
    >
      <span
        className="absolute -bottom-5 right-1/2 h-20 w-20 p-2 flex justify-center items-center translate-x-8 font-mono bg-black text-5xl text-white font-bold rounded-full md:-top-5   "
        onClick={submitNote}
      >
        +
      </span>
      <Yamde
        value={text}
        handler={setText}
        theme={isLightMode ? "light" : "dark"}
      />
    </div>
  );
};

export default Markdown;
