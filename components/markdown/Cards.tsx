import React from "react";
import ReactMarkdown from "react-markdown";
import Dailog from "../cardComponents/Dailog";
import Share from "../cardComponents/Share";

const Cards = ({ note }) => {
  return (
    <div className="w-full flex flex-wrap py-10 justify-center">
      {note
        ? note.map((card) => {
            return (
              <div
                className="w-80 h-96 p-5 flex flex-col justify-between bg-white dark:bg-nightBlue rounded-xl m-6"
                key={card.id}
              >
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex  items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-semibold pl-1 text-blue-500">
                      {card.author}
                    </p>
                  </div>
                  <Share share={card.share} id={card.id} />
                </div>
                <ReactMarkdown className="prose h-3/4 overflow-scroll scrollbar-hide bg-gray-200 rounded-md p-5 my-3">
                  {card.notes}
                </ReactMarkdown>
                <Dailog note={card.notes} card={card} id={card.id} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Cards;
