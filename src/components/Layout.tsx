import React, { ReactNode } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Nav {
  icon: ReactNode;
  services: string;
  contactUs: string;
  faqs: string;
  logIn: ReactNode;
}

const nav: Nav = {
  icon: <Brightness2Icon />,
  services: "Services",
  contactUs: "Contact Us",
  faqs: "FAQs",
  logIn: <Button endIcon={<ArrowForwardIcon />}>Log in</Button>,
};

const Layout = () => {
  return (
    <div className="flex flex-row justify-between items-center mx-8 py-8">
      <div className="w-24 text-white font-serif">{nav.icon} Moon</div>
      <div className="text-slate-100 w-96 flex flex-row justify-evenly cursor-pointer ">
        <span className="w-20 text-center">{nav.services}</span>
        <span className="w-20 text-center">{nav.contactUs}</span>
        <span className="w-20 text-center">{nav.faqs}</span>
      </div>
      <div className="w-24">{nav.logIn}</div>
    </div>
  );
};

export default Layout;
