import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenuMob = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="w-full h-16 bg-transparent fixed z-[1]">
      <div className="container mx-auto px-0 md:px-4 flex justify-between items-center h-full">
        <div className="hidden md:block">
          <img src="/assets/Group 7.svg" alt="Logo" />
        </div>

        <div className=" justify-center hidden md:flex relative h-[70px] w-[600px] nav--background bg-black">
          <ul className="flex justify-between w-[70%] text-white text-lg items-center">
            <li className="text-center text-neutral-600 text-xs font-semibold uppercase h-[100%] flex items-center">
              <NavLink to="/" className={"h-[100%] flex items-center "}>
                HOME
              </NavLink>
            </li>
            <li className="text-center text-neutral-600 text-xs font-semibold uppercase h-[100%] flex items-center">
              <NavLink to="/about" className={"h-[100%] flex items-center "}>
                ABOUT US
              </NavLink>
            </li>
            <li className="text-center text-neutral-600 text-xs font-semibold uppercase h-[100%] flex items-center">
              <NavLink to="/product" className={"h-[100%] flex items-center "}>
                ACTION
              </NavLink>
            </li>
            <li className="text-center text-neutral-600 text-xs font-semibold uppercase h-[100%] flex items-center">
              <NavLink to="/team" className={"h-[100%] flex items-center "}>
                TEAM
              </NavLink>
            </li>
            <li className="text-center text-neutral-600 text-xs font-semibold uppercase h-[100%] flex items-center">
              <NavLink to="/faq" className={"h-[100%] flex items-center "}>
                {" "}
                FAQS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">

        <div className="custom-button border hidden md:block border-white border-opacity-20">
          <span className="top-left absolute"></span>
          <span className="top-right absolute"></span>
          <span className="bottom-left absolute"></span>
          <span className="bottom-right absolute"></span>

          <button className="flex items-center py-[2px] bg-white bg-opacity-40 backdrop-blur-[44px]">
            <span className="px-8 font-chakraPetch text-white text-sm font-semibold uppercase">
              Connect Wallet
            </span>

            <span className="w-[36px] h-[36px] bg-white flex justify-center items-center mr-[2px]">
              <AiOutlineRight className="text-black w-2 h-3" />
            </span>
          </button>
        </div>
        </div>


        {/* Mobile menu */}
        <div className="w-full block md:hidden">
          <div className="flex md:hidden justify-around items-center relative h-[12vh] w-auto nav--background bg-black">
            <div>
              <img src="/assets/Group 7.svg" alt="Logo" />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-90 outline-none"
                onClick={toggleMenuMob}
              >
                {isOpenMenu ? (
                  <img src="/public/assets/icons/X.svg" className="h-8 w-8 text-white" aria-hidden="true" />
                ) : (
                  <img src="/public/assets/icons/menu.svg" className="h-8 w-8 text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpenMenu && (
          <div className="sm:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col justify-center items-center bg-mobile-img absolute left-0 top-[10vh]  w-full h-[90vh] " style={{mixBlendMode: "screen"}}>
              <NavLink
                to="/"
                className="px-3 py-2 text-white text-[40px] font-medium hover:border-b-2 transition duration-600 ease-in-out uppercase"
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                className="px-3 py-2 text-white font-medium text-[40px] hover:border-b-2 transition duration-600 ease-in-out uppercase"
              >
                About Us
              </NavLink>
              <NavLink
                to="/"
                className="px-3 py-2 text-white font-medium text-[40px] hover:border-b-2 transition duration-600 ease-in-out uppercase"
              >
                Action
              </NavLink>
              <NavLink
                to="/"
                className="px-3 py-2 text-white font-medium text-[40px] hover:border-b-2 transition duration-600 ease-in-out uppercase"
              >
               Team
              </NavLink>
              <NavLink
                to="/"
                className="px-3 py-2 text-white font-medium text-[40px] hover:border-b-2 transition duration-600 ease-in-out uppercase"
              >
                Faqs
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
