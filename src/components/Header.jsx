import React from "react";
import img from "../assets/images.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="h-[60px] bg-gray-500 flex items-center justify-around pr-4">
        <img src={img} alt="logo" className="h-[45px]" />
        <ul className="flex gap-10">
          <Link to="/">
            <li className="text-lg text-black">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-lg text-black">About</li>
          </Link>
          <Link to="/contact">
            <li className="text-lg text-black">contact us</li>
          </Link>
          <Link to="/instamart">
            <li className="text-lg text-black">Instamart</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
