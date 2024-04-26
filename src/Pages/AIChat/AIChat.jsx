import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoIosCloseCircleOutline } from "react-icons/io";

import DEG from "../../assets/DEG.png";
import logo from "../../assets/Frame2.svg";
import "./AIChat.css";

const AIChat = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="AI-menu"
    >
      <div className="AI-header">
        <div className="top">
          <div className="right-part">
            <img src={logo} alt="logo" className="AI-logo" />
            <h1>COGNICORE</h1>
          </div>
          <IoIosCloseCircleOutline
            className="AI-close"
            onClick={toggleDrawer(false)}
            color="white"
            size={30}
          />
        </div>
        <h2>
          HI MICRO CLUB 🙌 <br /> How can we help?
        </h2>
        <span className="phrase">
          Unlock the full potential of COGNICORE with our groundbreaking
          feature!
        </span>
      </div>
    </Box>
  );

  return (
    <div className="DEG-Page">
      <img src={DEG} style={{ width: "100%", height: "100%" }} />
      <button className="openButton" onClick={toggleDrawer(true)}>
        <img src={logo} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default AIChat;
