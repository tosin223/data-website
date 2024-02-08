import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto  py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <div>
          {" "}
          <h1 className="text-3xl cursor-pointer  font-bold text-[#00df9a]">
            Data.
          </h1>{" "}
        </div>
        <p className="py-4  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam
          dolor quo unde consectetur ullam odio repudiandae blanditiis cum.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="mt-6 lg:col-span-2 flex justify-between ">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm"><a href="">Prcing</a></li>
            <li className="py-2 text-sm"><a href="">Documentation</a></li>
            <li className="py-2 text-sm"><a href="">Guides</a></li>
            <li className="py-2 text-sm"><a href="">Api staus</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm"><a href="">Analytics</a></li>
            <li className="py-2 text-sm"><a href="">Marketing</a></li>
            <li className="py-2 text-sm"><a href="">Commerce</a></li>
            <li className="py-2 text-sm"><a href="">Insights</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm"><a href="">About</a></li>
            <li className="py-2 text-sm"><a href="">Blogs</a></li>
            <li className="py-2 text-sm"><a href="">Jobs</a></li>
            <li className="py-2 text-sm"><a href="">Press</a></li>
            <li className="py-2 text-sm"><a href="">Careers</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm"><a href="">Claim</a></li>
            <li className="py-2 text-sm"><a href="">Policy</a></li>
            <li className="py-2 text-sm"><a href="">Terms</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
