import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { IoIosCloseCircleOutline, IoIosSend } from "react-icons/io";
import DEG from "../../assets/DEG.png";
import logo from "../../assets/Frame2.svg";
import newconv from "../../assets/newConv.svg";
import "./AIChat.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Vice President",
  "Assistant Vice President",
  "Senior Manager",
  "Manager",
  "Officer",
  "Senior Associate",
  "Associate",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [alerter, setAlerter] = useState(false);
  const [category, setCategory] = useState("Human Ressources");
  const theme = useTheme();
  const [personPrivilege, setPersonPrivilege] = useState("");
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setPersonPrivilege(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlerter(false);
  };

  const handleSend = () => {
    const dataToSend = {
      category,
      personPrivilege,
      inputText,
    };
    if (personPrivilege === "") {
      setAlerter(true);
    } else if (inputText === "") {
      setAlerter(true);
    } else {
      alert(JSON.stringify(dataToSend));
      setInputText("");
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation" className="AI-menu">
      <div className="AI-header">
        <div className="bg1"></div>
        <div className="bg2"></div>
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
      <div className="AI-Content">
        <Select
          displayEmpty
          value={personPrivilege}
          onChange={handleChange}
          input={<OutlinedInput />}
          className="select"
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Choose position</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personPrivilege, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="AI-footer">
        <div className="chips">
          <Chip
            label="Human Ressources"
            onClick={() => {
              setCategory("Human Ressources");
            }}
            className={`hr ${category === "Human Ressources" ? "active" : ""}`}
          />
          <Chip
            label="Accouting and Finance"
            onClick={() => {
              setCategory("Accouting and Finance");
            }}
            className={`af ${
              category === "Accouting and Finance" ? "active" : ""
            }`}
          />
          <Chip
            label="Marketing"
            onClick={() => {
              setCategory("Marketing");
            }}
            className={`marketing ${category === "Marketing" ? "active" : ""}`}
          />
          <Chip
            label="IT"
            onClick={() => {
              setCategory("IT");
            }}
            className={`it ${category === "IT" ? "active" : ""}`}
          />
          <Chip
            label="Research and Development"
            onClick={() => {
              setCategory("Research and Development");
            }}
            className={`rd ${
              category === "Research and Development" ? "active" : ""
            }`}
          />
          <Chip
            label="Production"
            onClick={() => {
              setCategory("Production");
            }}
            className={`prod ${category === "Production" ? "active" : ""}`}
          />
        </div>
        <div className="writing-input">
          <input
            type="text"
            placeholder="Write your prompt..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <img src={newconv} alt="newconv" />
          <IoIosSend
            color="#00000057"
            size={20}
            className="send"
            onClick={handleSend}
          />
        </div>
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
      <Snackbar
        open={alerter}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Please choose a position and write a prompt
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AIChat;
