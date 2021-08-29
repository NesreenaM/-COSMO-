import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function CustomMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ background: `${props.background}`}}
      >
        {props.name} <ArrowDropDownIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{color:"#7d7d7d"}}
      >
        <MenuItem style={{borderBottom:"1px solid #E1E1E1"}} onClick={handleClose}>{props.itemone}</MenuItem>
        <MenuItem onClick={handleClose}>{props.itemtwo}</MenuItem>
        <MenuItem onClick={handleClose}>{props.itemthree}</MenuItem>
        <MenuItem onClick={handleClose}>{props.itemfour}</MenuItem>
        <MenuItem onClick={handleClose}>{props.itemfive}</MenuItem>
      </Menu>
    </div>
  );
}
