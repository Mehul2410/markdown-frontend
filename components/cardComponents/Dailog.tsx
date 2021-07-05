import React from "react";
import Yamde from "yamde";
import { parseCookies } from "nookies";
import router from "next/router";

const Dailog = ({ card, note, id }) => {
  let [isOpen, setIsOpen] = React.useState(false);
  const { jwt } = parseCookies();
  const [text, setText] = React.useState(note);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    console.log(id);
  }

  const updatedNote = {
    notes: text,
  };
  async function updateNote() {
    const sendNote = await fetch(`http://localhost:1337/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedNote),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    router.reload();
  }
  return (
    <>
      <div className="flex flex-wrap flex-row justify-between items-center">
        <i className="px-4 py-1 bg-cardUpdate rounded-2xl text-gray-500 text-xs w-max">
          {card.updated_at.slice(0, 10)}
        </i>
        <p
          onClick={openModal}
          className="flex items-center bg-cardUpdate rounded-2xl text-gray-500  w-max px-4 py-1 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          edit
        </p>
      </div>
      {isOpen ? (
        <div className="flex top-0 left-0 right-0 justify-center items-center w-full h-full fixed z-10 backdrop-blur-sm">
          <div
            className="relative prose m-auto bg-white
        p-5 rounded-lg"
          >
            <span className="space-x-5 absolute -bottom-4 origin-center translate-x-8	right-1/2 h-30 w-15 px-5 py-3 flex justify-center items-center text-white  rounded-lg md:-top-10 bg-newBlack dark:bg-blac">
              <button
                type="button"
                onClick={() => {
                  updateNote();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </button>
              <button type="button" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
            <Yamde value={text} handler={setText} theme={"light"} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dailog;
