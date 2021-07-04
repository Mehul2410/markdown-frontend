import React from "react";
import Yamde from "yamde";

const Markdown = ({ text, isLightMode, setText }) => {
  async function submitNote() {
    try {
      const noteBody = {
        author: "Mehul",
        notes: text,
      };
      console.log(noteBody);
      const sendNote = await fetch("http://localhost:1337/notes", {
        method: "POST",
        body: JSON.stringify(noteBody),
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
        className="absolute -bottom-5 origin-center translate-x-8	right-1/2 h-20 w-20 p-2 flex justify-center items-center font-mono bg-black text-5xl text-white font-bold rounded-full"
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
