import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ContextOpen } from "../../Screens/GL-Extra/GLExtraBody";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "green !important",
    maxHeight: "38px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const { open, handleChangeto } = useContext(ContextOpen);

  return (
    <div>
      <Accordion onChange={() => handleChangeto(open)}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id={props.id}
          style={{
            background: props.background,
            paddingLeft: props.paddingLeft ? props.paddingLeft : "30px",
            color: "#7d7d7d",
          }}
        >
          <Typography className={classes.heading}>
            {" "}
            <ExpandMoreIcon className="expand-icon" /> {props.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="width-100">
            {props.children}
            {props.body}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
