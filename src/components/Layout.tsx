import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";
import { useRef } from "react";

const Layout = () => {
  const [mouseHover, setMouseHover] = React.useState(false);
  const [mobileNav, setMobileNav] = React.useState(false);

  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  const handleCross = () => {
    setMobileNav(false);
  };
  return (
    <div>
      <div className="md:h-28 sm:h-20 h-24 shadow-xl flex md:justify-start items-center w-full md:ml-5">
        {/* w-[1400px] h-[50px] flex justify-between text-MidnightNavy */}
        <div className="h-[70px] flex justify-between md:justify-start w-full lg:h-[50px]">
          <img
            src="../img/Icon-Color.svg"
            alt=""
            //   w-[215px] h-full lg:ml-3
            className="sm:ml-6 lg:mt-0 hidden md:block lg:mr-10"
          />
          <img
            src="../img/Icon-Color.svg"
            alt=""
            //   w-[215px] h-full lg:ml-3
            className="w-[90px] h-10 mt-4 sm:ml-6 lg:w-[215px] lg:mt-0 lg:h-full block md:hidden"
          />
          <div className="">
            <div className="flex cursor-pointer justify-evenly md:justify-around items-center h-full font-[body] uppercase text-xl lg:justify-around w-full">
              <div className="md:flex gap-8 hidden text-white font-serif">
                <a href="#about" className="hover:opacity-40 duration-300">
                  About
                </a>
                {/* <a href="#work" className="hover:opacity-40 duration-300">
                  Work
                </a> */}
                <a href="#features" className="hover:opacity-40 duration-300">
                  Features
                </a>
                <a href="#faq" className="hover:opacity-40 duration-300">
                  Faq
                </a>
              </div>
             
              <div className="text-5xl text-white sm:ml-[100px] md:hidden">
                <BiMenuAltRight onClick={handleClick} />
              </div>
            </div>
            {/* border-collapse py-4 px-12 rounded-full bg-MidnightNavy text-white text-lg */}
          </div>
        </div>
        {/* mobileNav */}
        <div
        style={{background: "linear-gradient(180deg, hsla(0, 0%, 11%, 1) 0%, hsla(219, 98%, 50%, 1) 100%)"}}
          className={
            mobileNav
              ? "w-full h-[100vh] fixed top-0 ease-in-out text-white lg:hidden z-10 duration-500"
              : "fixed top-[-100%] duration-500 ease-in-out"

              
          }
        >
          {" "}
        </div>

        <div
          className={
            mobileNav
              ? "fixed top-0 z-20 uppercase w-full text-MidnightNavy lg:hidden duration-500"
              : "fixed top-[-100%] duration-500 ease-in-out"
          }
        >
          <div className="h-28">
            <div
              onMouseEnter={() => setMouseHover(true)}
              onMouseLeave={() => setMouseHover(false)}
              className="float-right p-4 m-4 text-3xl duration-300 text-white"
            >
              {mouseHover ? (
                <AiOutlineMinus onClick={handleCross} />
              ) : (
                <RxCross1 onClick={handleCross} />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between text-white items-center h-[250px] text-2xl text-MidnightNavy font-bold">
            <a href="#about" onClick={handleCross}>
              About
            </a>
            {/* <a href="#work" onClick={handleCross}>
              Work
            </a> */}
            <a href="#features" onClick={handleCross}>
              Features
            </a>
            <a href="#faq" onClick={handleCross}>
              Faq
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;