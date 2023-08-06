import React from "react";
import "./nav.css";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { CiGrid41 } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <BiHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <CiGrid41 />
      </a>
      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
