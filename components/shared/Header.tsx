import React from "react";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { token } = parseCookies();
  let user: Boolean = false;
  if (token) {
    user = true;
  } else {
    user = false;
  }

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "";
  }

  return (
    <div className="z-10 flex justify-between items-center h-24 fixed w-full px-10 bg-primary dark:bg-newBlack ">
      <Link href="/">
        <a>
          <h2 className="font-sans text-3xl text-white font-bold tracking-wider  ">
            MarkNote
          </h2>
        </a>
      </Link>
      {user ? (
        <Link href="/logout">
          <a className={isActive("/logout")}>
            <span className="py-3 px-5 bg-border rounded-lg font-semibold cursor-pointer ">
              logout
            </span>
          </a>
        </Link>
      ) : (
        <Link href="/login">
          <a className={isActive("/login")}>
            <span className="py-3 px-5 bg-secondary rounded-lg font-semibold cursor-pointer   ">
              Login / Signup
            </span>
          </a>
        </Link>
      )}

      {/* <span className="py-3 px-5 bg-secondary rounded-lg ">👋 Mehul</span> */}
    </div>
  );
};

export default Header;
