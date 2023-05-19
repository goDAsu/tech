import React from "react";
import face from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import twit from "../assets/images/icon-twitter.svg";
import pin from "../assets/images/icon-pinterest.svg";
// import log from "../assets/WhatsApp.jpeg";
import logo from "../assets/valimg.jpg";

const Footer = () => {
  return (
    <div>
      <div className="bg-black mt-52">
        <h2 className="font-extrabold text-white text-center text-2xl">
          Thanks for your time with us hope this site is helpful to you
        </h2>
        <div className="bg-black md:flex gap-16 pl-[10%] md:mt-0 mt-[-25] text-center">
          <img
            src={logo}
            alt="logo"
            className="w-[30%] rounded-lg md:w-[10%] md:ml-0 ml-[35%] pt-5 md:mt-[3%]"
          />
          <ul className="text-white md:ml-[20%] mt-10 md:mt-[3%]">
            <li className="font-bold text-xl">Features</li>
            <li>Branded links</li>
            <li>link shortening</li>
            <li>Analytics</li>
          </ul>
          <ul className="text-white mt-[3%]">
            <li className="font-bold text-xl">Resources</li>
            <li>Branded links</li>
            <li>link shortening</li>
            <li>Analytics</li>
          </ul>
          <ul className="text-white mt-[3%]">
            <li className="font-bold text-xl">Company</li>
            <li>Branded links</li>
            <li>link shortening</li>
            <li>Analytics</li>
          </ul>
          <ul className="flex gap-7 md:ml-0 ml-10 mt-[3%]">
            <img src={face} alt="" className="h-8" />
            <img src={twit} alt="" className="h-8" />
            <img src={pin} alt="" className="h-8" />
            <img src={insta} alt="" className="h-8" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
