import { Divider } from "@mui/material";
import React, { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="lg:mx-32 sm:mx-14 mx-3 py-20 ">
      <Divider style={{ backgroundColor: "gray" }} />
      <div className="flex justify-between mt-10 gap-10">
        <p className="text-black-400 text-center text-sm">
        ©  2024 Schedjuice. All right reserved.
        </p>
        <div className="w-56 flex flex-wrap justify-center md:gap-6 gap-6">
          <a href="https://www.facebook.com/schedjuice" target="_black">
          <FacebookIcon sx={{ color: "black" }} />

          </a>
          <a href="">
          <LinkedIn sx={{ color: "black" }} />
            
          </a>
          <a href="">
          <GitHubIcon sx={{ color: "black" }} />
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
