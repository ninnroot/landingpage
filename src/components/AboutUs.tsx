import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AboutUs = () => {
  return (
    <div className="mx-32 flex flex-row text-white justify-center items-center py-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="cursor-pointer py-1 px-2 border-2 border-gray-700 rounded-xl hover:border-gray-500">
          <span className="text-gray-300 text-sm">Innovating our ideas.</span>
          <span className="font-bold text-whtie text-sm"> Read More</span>
          <ArrowRightAltIcon />
        </div>
        <p className="text-center max-w-2xl mx-auto text-[55px] font-bold">
          Innovative tech solutions for your business growth
        </p>
        <p className="text-center text-md max-w-2xl mx-auto leading-8 text-gray-300">
          Myanmar Cyber Youths provides data-driven solutions to help businesses
          succeed online. Our experienced team specializes in app and web
          development, ERP solutions, and optimization for maximum impact.
          Contact us to learn how we can help you harness the power of data to
          achieve your business goals.
        </p>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="py-2 px-3 bg-white text-black rounded-md ">
            Get started
          </div>
          <div>
            <span className="py-2 px-3 font-bold">Learn more</span>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
