import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { ReactNode } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { Button, ToggleButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CallIcon from "@mui/icons-material/Call";
import LoginIcon from "@mui/icons-material/Login";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

type Anchor = "right";

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

interface ModileDrawer {
  text: string;
  icon: ReactNode;
}
const mobileDrawer: ModileDrawer[] = [
  { text: "Services", icon: <MiscellaneousServicesIcon /> },
  { text: "FAQs", icon: <QuestionMarkIcon /> },
  { text: "Contact Us", icon: <CallIcon /> },
];

const Layout = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {mobileDrawer.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <div className="flex justify-start items-center">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <div className="flex justify-start items-center">
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Log in</ListItemText>
            </div>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div>
        <div className="hidden lg:flex flex-row justify-between items-center mx-8 py-8">
          <div className="w-24 text-white font-serif">{nav.icon} Moon</div>
          <div className="text-slate-100 w-96 flex flex-row justify-evenly cursor-pointer ">
            <span className="w-20 text-center">{nav.services}</span>
            <span className="w-20 text-center">{nav.contactUs}</span>
            <span className="w-20 text-center">{nav.faqs}</span>
          </div>
          <div className="w-24">{nav.logIn}</div>
        </div>
      </div>
      <div className="lg:hidden flex justify-between items-center mx-8">
        <div className="w-24 text-white font-serif">{nav.icon} Moon</div>
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <ToggleButton
                value="right"
                aria-label="right aligned"
                style={{ color: "white" }}
              >
                <FormatAlignRightIcon />
              </ToggleButton>
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Layout;
