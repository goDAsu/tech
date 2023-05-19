import React, { useState } from "react";
// import logo from "../assets/WhatsApp.jpeg";
import { FaMicrophone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/valimg.jpg";

const Nav = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="drop-shadow-2xl bg-white z-10 w-screen fixed shadow-2xl">
      <div className=" border-b-2 border-red-400 drop-shadow-2xl p-1">
        <div className="flex md:ml-[15%] ml-[5%] gap-[25%]">
          <img src={logo} alt="logo" className="md:w-[7%] w-[30%]" />
          {/* <AiOutlineMenu className="md:hidden flex mt-3 ml-20" size={30} /> */}
          <div onClick={handleNav} className="block md:hidden">
            {!nav ? (
              <AiOutlineClose
                size={30}
                className="pointer-corsor md:hidden flex mt-3 ml-20 text-red-500 border-2 border-red-500 p-0.5 rounded-full z-50"
              />
            ) : (
              <AiOutlineMenu
                size={30}
                className="pointer-corsor md:hidden flex mt-3 ml-20 text-black z-50"
              />
            )}
          </div>
          <ul className="md:flex hidden gap-12 p-2">
            <li className="flex gap-2 cursor-pointer">
              <HiLocationMarker size={30} color="#EC3233" />
              winners road, igbo eche, Rivers State
            </li>
            <li className="flex gap-2 cursor-pointer">
              <BsClockHistory size={30} color="#EC3233" />
              Monday-Friday: 9am to 7pm <br /> Saturday: 9am to 5pm
            </li>
            <li className="flex gap-2 cursor-pointer">
              <FaMicrophone size={30} color="#EC3233" /> +234 (0) 803 417 7237
            </li>
          </ul>
          <ul
            className={
              !nav
                ? "md:hidden fixed p-5 left-0 top-0 flex-col bg-white border-2 border-gray-300 rounded-lg drop-shadow-2xl shadow-black ml-5 w-80 mt-16 h-96 ease-in-out duration-500 md:ml-[7%]"
                : "fixed left-[-100%]"
            }
          >
            <li className="flex gap-2 mt-3 cursor-pointer">
              <HiLocationMarker size={30} color="#EC3233" />
              winners road, igbo eche, Rivers State
            </li>
            <hr />
            <li className="flex gap-2 mt-7 cursor-pointer">
              <BsClockHistory size={30} color="#EC3233" />
              Monday-Friday: 9am to 7pm <br /> Saturday: 9am to 5pm
            </li>
            <hr />
            <li className="flex gap-2 mt-7 cursor-pointer">
              <FaMicrophone size={30} color="#EC3233" /> +234 (0) 803 417 7237
            </li>
            <hr />
            <li className="font-bold mt-5 cursor-pointer hover:text-gray-800 text-gray-500">
              More
            </li>
            <hr />
            <li className="font-bold mt-5 cursor-pointer hover:text-gray-800 text-gray-500">
              About
            </li>
            <hr />
            <Link
              to={"/Terms"}
              className="font-bold mt-5 cursor-pointer hover:text-gray-800 text-gray-500"
            >
              Admission
            </Link>
            <hr />
          </ul>
        </div>
      </div>

      <div className="text-center pt-5 h-20">
        <ul className="flex gap-10 justify-center">
          <Link
            to={"/"}
            className="hover:text-blue-400 font-bold rounded-s-md text-gray-400 duration-100 hover:border-b-2 hover:border-blue-400"
          >
            Home
          </Link>
          <li className="hover:text-blue-400 font-bold rounded-s-md text-gray-400 duration-100 hover:border-b-2 hover:border-blue-400">
            About
          </li>
          <li className="hover:text-blue-400 font-bold rounded-s-md text-gray-400 duration-100 hover:border-b-2 hover:border-blue-400">
            More
          </li>
          <li className="hover:text-blue-400 font-bold rounded-s-md text-gray-400 duration-100 hover:border-b-2 hover:border-blue-400">
            Blog
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
