import React from "react";
import { Disclosure } from "@headlessui/react";
import { parseCookies } from "nookies";

const Share = ({ share, id }) => {
  const { jwt } = parseCookies();
  const [sharedUser, setSharedUser] = React.useState<string>();

  async function shareNote(e) {
    e.preventDefault();
    let shareArray = [];
    share.forEach((element: string) => {
      // if (element !== sharedUser) {
      //   console.log("try again");
      // } else {
      shareArray.push(element, sharedUser);
      setSharedUser("");
      // }
    });
    console.log(shareArray);
    const SharedUser = {
      share: shareArray,
    };

    const updateSharedUser = await fetch(`http://localhost:1337/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(SharedUser),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Disclosure>
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
      <Disclosure.Panel
        as="form"
        className="text-gray-500 w-full"
        onSubmit={(e) => {
          shareNote(e);
        }}
      >
        <input
          className="w-full"
          type="email"
          placeholder="enter username"
          value={sharedUser}
          required
          onChange={(e) => {
            setSharedUser(e.target.value);
          }}
        />
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default Share;
