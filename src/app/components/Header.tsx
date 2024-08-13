import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full bg-blue-800 flex justify-between text-xl">
      <div className="text-white text-2xl p-2 font-bold font-sans">TO-DO APP</div>
      <div className="text-white text-xl p-2">
        <a
          href="https://github.com/ChrisRoland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
    // </main>
  );
};

export default Header;
