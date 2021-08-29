import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import SideBar from "../Components/SideBar/SideBar";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Salescreen from "../Screens/SalesSreen/Salescreen";
import PermissionUsers from "../Screens/PermissionUsers/PermissionUsers";
import SettingSubSideBar from "../Components/SettingSubSideBar/SettingSubSideBar";
import { Container } from "@material-ui/core";
import InvoiceScreen from "../Screens/InvoiceScreen/InvoiceScreen";
import { Collapse } from "@material-ui/core";
import GLExtraBody from "../Screens/GL-Extra/GLExtraBody";
import LogIn from "../Screens/LogIn/LogIn";
import GLExtra from "../Screens/GL-Extra/GLExtra";
import SwitchBar from "../Screens/InvoiceScreen/SwitchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    // width: "100%",
    justifyContent: "start",
    flex: "Column",
    margin: "-20px",
  },
  paper: {
    height: 140,
    // width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const ContextItem = React.createContext({
  open: true,
  handleChangeto: () => ``,
});

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // const [fullWidth, setWidth] = useState(open);
  const handleChangeto = (open) => setOpen(!open);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const [subSidBar, setSubSidBar] = useState(false);
  const myRoute = window.location.pathname.slice(1);

  console.log(myRoute);
  return myRoute == "LogIn" ? (
    <LogIn />
  ) : (
    <ContextItem.Provider value={{ open, handleChangeto }}>
      <div className="wrapper">
        <NavBar />

        <div className="layout">
          <div
            className="left"
            style={{
        
              width: `${open ? "100%" : "8%"}`,
            }}
          >
            {console.log("is  open  is ",open)}
            <SideBar setSubSidBar={setSubSidBar} subSidBar={subSidBar} />
          </div>
          <div
            className="right"
            style={{
        
              width: `${open ? "80%" : "95%"}`,
            }}

>
            <div style={{ display: "flex", }}>
              {subSidBar && <SettingSubSideBar />}
              <Route
                key={300}
                path={"/sales"}
                exact={true}
                component={Salescreen}
              />
              <Route
                key={304}
                path={"/invoice"}
                exact={true}
                component={InvoiceScreen}
              />

              <Route
                key={304000}
                path={"/switch-bar"}
                exact={true}
                component={SwitchBar}
              />

              <Route
                key={302}
                path={"/PermissionUsers"}
                exact={true}
                component={PermissionUsers}
              />

              <Route
                key={30552}
                path={"/GLExtra"}
                exact={true}
                component={GLExtra}
              />
            </div>
          </div>
        </div>
        <Collapse />
      </div>
    </ContextItem.Provider>
  );
}
