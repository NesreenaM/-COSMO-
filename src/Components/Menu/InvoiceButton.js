import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function InvoiceButton(props) {
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

        style={{ background: `${props.background}`, marginRight: "10px", width: `${props.width}`,
        height: "29px" ,  color: `${props.color}`}}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="Globle-Flex-Row">
          <div className="btn-border">{props.name} </div>
          <div>
            {" "}
            <ArrowDropDownIcon  style={{marginTop: "9px"}} />{" "}
          </div>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
         <MenuItem style={{borderBottom:"1px solid #E1E1E1" ,  fontSize:"13px"}} onClick={handleClose}>{props.itemone}</MenuItem>
        <MenuItem style={{ fontSize:"13px"}} onClick={handleClose}><div>
          <button disabled style={{background:"#fff", marginLeft:"-14px" ,marginRight: "36px"}}>Followers</button>
          <span style={{}}>+</span>
          </div></MenuItem>
        <MenuItem style={{ fontSize:"13px"}} onClick={handleClose}>{props.itemthree}</MenuItem>
        <MenuItem style={{ fontSize:"13px"}} onClick={handleClose}>{props.itemfour}</MenuItem>
      </Menu>
    </div>
  );
}


