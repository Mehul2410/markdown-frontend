import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-24 fixed w-full px-10 bg-primary shadow">
      <Link href="/">
        <a>
          <h2 className="text-3xl text-white font-bold tracking-wider ">
            MarkNote
          </h2>
        </a>
      </Link>

      <Link href="/login">
        <a>
          <span className="py-3 px-5 bg-secondary rounded-lg font-semibold cursor-pointer">
            Login / Signup
          </span>
        </a>
      </Link>

      {/* <span className="py-3 px-5 bg-secondary rounded-lg ">👋 Mehul</span> */}
    </div>
  );
};

export default Header;
