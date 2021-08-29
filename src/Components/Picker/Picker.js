import React from "react";
import IconButton from "@material-ui/core/IconButton";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export default function Picker(props) {
  return (
    <TextField
      id={props.id}
      label={props.title}
      floatingLabelFixed={true}
      type="data"
      style={{color:"#7D7D7D"}}
      defaultValue={props.value}
      className={{}}
      InputProps={{
        shrink: true,
        startAdornment: (
          <InputAdornment positionEnd style={{color:"#7D7D7D"}}>
            <ArrowDropDownIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
