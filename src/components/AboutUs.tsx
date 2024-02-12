import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AboutUs = () => {
  return (
    <div className="sm:mx-16 lg:32 mx-3 flex flex-row text-white justify-center items-center py-20" id="about">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <div className="cursor-pointer py-1 px-2 border-2 border-gray-700 rounded-xl hover:border-gray-500">
          <span className="text-gray-300 text-sm">Innovating our ideas.</span>
          <span className="font-bold text-whtie text-sm"> Read More</span>
          <ArrowRightAltIcon />
        </div> */}
        <p className="text-center max-w-2xl mx-auto md:text-3xl xl:text-[55px] text-2xl font-bold">
          Schedjuice
        </p>
        <p className="text-center text-md max-w-2xl mx-auto leading-8 text-gray-300">
        Transform the way you administer education with Schedjuice, the comprehensive platform designed to streamline and enhance your school's operations.
        </p>
        <div className="flex flex-row justify-center items-center gap-8">
          <a href="https://www.facebook.com/messages/t/137984759408974" target="_blank">
          <div className="py-2 px-3 bg-white text-black rounded-md ">
            Get started
          </div>
          </a>
          {/* <div>
            <span className="py-2 px-3 font-bold">Learn more</span>
            <ArrowRightAltIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
