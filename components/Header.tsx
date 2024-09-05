import React from "react";

const Header = () => {
  return (
    <div className=" responsive navbar bg-inherit justify-end sticky top-0 z-50">
      <div className="flex space-x-4">
        <a href="#projects" className="btn btn-ghost normal-case text-xl">
          Projects
        </a>
        <a href="#skills" className="btn btn-ghost normal-case text-xl">
          Skills
        </a>
        <a href="#contact" className="btn btn-ghost normal-case text-xl">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
