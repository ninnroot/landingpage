import { Divider } from "@mui/material";
import React, { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="mx-32 py-20">
      <Divider style={{ backgroundColor: "gray" }} />
      <div className="flex justify-between mt-10">
        <p className="text-gray-400 text-sm">
          @2023 Tone Tone Lay. All right reserved.
        </p>
        <div className="w-56 flex gap-6">
          <FacebookIcon sx={{ color: "gray" }} />
          <InstagramIcon sx={{ color: "gray" }} />
          <TwitterIcon sx={{ color: "gray" }} />
          <GitHubIcon sx={{ color: "gray" }} />
          <YouTubeIcon sx={{ color: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
