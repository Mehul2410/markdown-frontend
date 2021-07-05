import React, { createContext, useContext } from "react";
import { parseCookies } from "nookies";

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [userResponse, setUserResponse] = React.useState();
  let authenticateduser = [];
  let notesResponse;

  React.useEffect(async (ctx) => {
    const { jwt } = parseCookies(ctx);

    if (!jwt) {
      const { res } = ctx;
      res.writeHead(302, {
        Location: "/login",
      });
      res.end();
    } else {
      const user = await fetch("http://localhost:1337/profiles/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      userResponse = await user.json();

      // extract the token from the server size ctx

      const notes = await fetch("http://localhost:1337/notes", {
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
  }, []);

  return (
    <AppContext.Provider value={[userResponse]}>{children}</AppContext.Provider>
  );
}
