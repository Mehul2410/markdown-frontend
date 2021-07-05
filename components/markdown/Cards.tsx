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
                className="w-72 h-96 p-5 flex flex-col justify-between bg-white rounded-xl m-4"
                key={card.id}
              >
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex  items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xl font-semibold pl-3 text-blue-500">
                      {card.author}
                    </p>
                  </div>
                  <Share share={card.share} id={card.id} />
                </div>
                <ReactMarkdown className="prose h-3/4 overflow-scroll scrollbar-hide bg-gray-200 rounded-md p-5">
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
