import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PaymentIcon from "@material-ui/icons/Payment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link, useHistory } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, { useState } from "react";
import { ContextItem } from "../../Layout/layout";
import { useContext } from "react";
import SideBarItem from "../SideBarItems/SideBarItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: "#fff",
    backgroundColor: "#0701B5",
    borderRadius: "9px",
  },
}));

export default function SideBar({ subSidBar, setSubSidBar }) {
  const { open, handleChangeto } = useContext(ContextItem);
  const history = useHistory();
  const classes = useStyles();
  return (
    <div
      className="side-bg"
      style={{
        width: "100%",
      }}
    >
      <div className="sidebar-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="user-flexrow" style={{ margin: "0px !important" }}>
            <span className="user-name" style={{ margin: "0px !important" }}>
              A
            </span>
            <SideBarItem text={"Arimed"} style={{ margin: "0px !important" }} />
          </div>

          <Link>
            <SideBarItem
              text={"Dashbord"}
              icons={<DashboardIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
          <Link>
            <SideBarItem
              text={"Accounting"}
              icons={<AccountBoxIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
          <Link>
            <SideBarItem
              text={"Finance"}
              icons={<PaymentIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
          <Link>
            <SideBarItem
              text={"Supply chain"}
              icons={<PaymentIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
          <Link to="/sales">
            <SideBarItem
              text={"Sales"}
              icons={<PaymentIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
          <Link>
            <SideBarItem
              text={"Customer Relations"}
              icons={<PaymentIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
          <Link>
            <SideBarItem
              text={"Humen Resource"}
              icons={<PaymentIcon style={{ marginRight: "20px" }} />}
            />
          </Link>
        </div>
      </div>

      <div className="sidebar-setting">
        <Link
          onClick={() => {
            setSubSidBar(!subSidBar);
          }}
        >
          <SideBarItem
            text={"Settings"}
            icons={<SettingsIcon style={{ marginRight: "20px" }} />}
          />
        </Link>
        <Link className="cheveron-icon">
          <ChevronLeftIcon
            onClick={() => handleChangeto(open)}
            style={{
              transform: `${!open ? "rotate(-180deg) " : ""}`,
            }}
          />{" "}
        </Link>
      </div>
    </div>
  );
}
