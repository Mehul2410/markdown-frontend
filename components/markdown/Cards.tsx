import React from "react";
import ReactMarkdown from "react-markdown";
import { Disclosure } from "@headlessui/react";

const Cards = () => {
  return (
    <div className="w-full ">
      <div className="w-72 h-80 p-5 bg-white rounded-xl  ">
        <div className="flex flex-wrap justify-between  items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xl font-semibold pl-3 text-blue-500">Author</p>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                {open ? (
                  <Disclosure.Button className="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 font-bold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </Disclosure.Button>
                ) : (
                  <Disclosure.Button className="py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </Disclosure.Button>
                )}
                <Disclosure.Panel className="text-gray-500">
                  <input type="text" placeholder="enter username" />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <ReactMarkdown className="prose">"hello"</ReactMarkdown>
      </div>
    </div>
  );
};

export default Cards;
