import React from "react";
import Yamde from "yamde";
import { parseCookies } from "nookies";
import { API_URL } from "../../config";

const Markdown = ({ text, setText, userEmail }) => {
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
      const sendNote = await fetch(`${API_URL}/notes`, {
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
      console.error("something went wrong");
    }
  }
  return (
    <div
      className="relative prose m-auto
         bg-white dark:bg-nightBlue
        p-5 rounded-lg mt-4 "
    >
      <button
        className="absolute -bottom-5 right-1/2 h-20 w-20 p-2 flex justify-center items-center translate-x-8 rounded-full md:-top-10 cursor-pointer bg-newBlack dark:bg-black "
        onClick={submitNote}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-5xl text-white font-bold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <Yamde value={text} handler={setText} />
    </div>
  );
};

export default Markdown;
