import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Checkbox from "../CheckBox/CheckBox";
import SettingsIcon from "@material-ui/icons/Settings";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: "26%",
    left: "48%",
    transform: "translate(-48%, -42%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "#7d7d7d",
    width: " 890px",
    height: "347px",
    boxShadow: "0px 0px 20px #00000029",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="Globle-Flex-Row just-content">
        <h2 id="simple-modal-title" style={{ paddingBottom: "10px" }}>
          List Config
        </h2>
        <span>X</span>
      </div>
      <hr />
      <p id="simple-modal-description" className=" typography-model">
        Kindly select the optional columns required
      </p>

      <div>
        <span className="Globle-Flex-Row span-model">
          <Checkbox />
          <p>Discount</p>
        </span>
        <span className="Globle-Flex-Row span-model">
          <Checkbox />
          <p>Discount</p>
        </span>
        <span className="Globle-Flex-Row span-model">
          <Checkbox />
          <p>Discount</p>
        </span>
        <span className="Globle-Flex-Row span-model">
          <Checkbox />
          <p>Discount</p>
        </span>
      </div>
      <button className="btn">Update</button>
    </div>
  );

  return (
    <div>
      <span type="button" onClick={handleOpen}>
        <SettingsIcon />
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
