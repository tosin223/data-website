import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNavClick = () => {
    setNav(!nav);
  };
  return (
    <nav className="text-white  flex justify-between items-center py-5 max-w-[1240px] mx-auto px-4">
      <div> <h1 className="text-3xl cursor-pointer  font-bold text-[#00df9a]">Data.</h1> </div>
      
      <ul className="md:flex hidden">
        <li className="px-4"><a href="#home">Home</a></li>
        <li className="px-4"><a href="#company">Company</a></li>
        <li className="px-4"><a href="#resource">Resource</a></li>
        <li className="px-4"><a href="#about">About</a></li>
        <li className="px-4"><a href="#contact">Contact</a></li>
      </ul>
      {/* <AiOutlineClose /> */}
      <div onClick={handleNavClick} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      {nav && (
        <div
          className="bg-[#000300] border-r border-r-gray-900 h-full fixed left-0 top-0 w-[60%]"   
        >
          <h1 className="text-3xl mt-5  font-bold text-[#00df9a]">Data.</h1>
          <ul className="uppercase ">
            <li className="p-4 border-b border-gray-400">Home</li>
            <li className="p-4 border-b border-gray-400">Company</li>
            <li className="p-4 border-b border-gray-400">Resource</li>
            <li className="p-4 border-b border-gray-400">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
