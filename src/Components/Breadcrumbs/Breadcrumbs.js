import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function SimpleBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{width:"24vw" , fontSize:"1.1vw"}}>
      <Link color="inherit" href="/" onClick={handleClick}>
        {props.first}
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        {props.second}
      </Link>
      <Typography color="textPrimary">{props.there}</Typography>
    </Breadcrumbs>
  );
}
