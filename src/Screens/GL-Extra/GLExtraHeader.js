import Menu from "../../Components/Menu/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import "./style.css";
import { Link } from "react-router-dom";
import Picker from "../../Components/Picker/Picker";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomMenu from "../../Components/Menu/CustomMenu";

export default function GLExtraHeader() {
  return (
    <div className="GLExtra-header">
      <div className="Globle-Flex-Row general-header">
        <h3>General Ledger</h3>
        <div className="Globle-Flex-Row">
          <p className="general-typography">Email</p>
          <p className="general-typography">Print</p>
          <p className="export-menu">
            <CustomMenu name={"Export"} />
          </p>
          <SettingsIcon className="export-setting-icon" />
        </div>
      </div>
      <div className="Globle-Flex-Row just-content general-header-two">
        <span className="Globle-Flex-Column">
          <p>Account Type</p>
          <span className="Globle-Flex-Row">
            <input placeholder={"All Accounts"} />
            <ArrowDropDownIcon style={{ color: "#7d7d7d" }} />
          </span>
        </span>

        <span className="Globle-Flex-Column">
          <p>Duration</p>
          <span className="Globle-Flex-Row">
            <input
              style={{ width: " 14vw" }}
              placeholder={"This Annual Year To Date"}
            />
            <ArrowDropDownIcon style={{ color: "#7d7d7d" }} />
          </span>
        </span>
        <span className="Globle-Flex-Column">
          <p>From</p>
          <span className="Globle-Flex-Row">
            <input placeholder={"01/01/21"} />
            <ArrowDropDownIcon style={{ color: "#7d7d7d" }} />
          </span>
        </span>
        <span className="Globle-Flex-Column">
          <p>To</p>
          <span className="Globle-Flex-Row">
            <input placeholder={"01/01/21"} />
            <ArrowDropDownIcon style={{ color: "#7d7d7d" }} />
          </span>
        </span>
        <span className="Globle-Flex-Column">
          <p>Branch</p>
          <span className="Globle-Flex-Row">
            <input placeholder={"01/01/21"} />
            <ArrowDropDownIcon style={{ color: "#7d7d7d" }} />
          </span>
        </span>
        <Link className="advance-like">Advanced </Link>
      </div>
    </div>
  );
}
