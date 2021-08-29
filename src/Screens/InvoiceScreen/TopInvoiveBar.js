import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DropDown from "../../Components/DropDown/DropDown";
import Menu from "../../Components/Menu/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomMenu from "../../Components/Menu/CustomMenu";

export default function TopInvoiveBar() {
  return (
    <div className="Globle-Flex-column top-bar-invoice">
      <div className="Globle-Flex-Row invoice-num just-content">
        <span>
          <p>3276 Invoice</p>
        </span>
        <span className="Globle-Flex-Row ">
          <span className="Globle-Flex-Row ">
            <p>1060 </p>
            <p style={{ marginTop: "-8px", fontSize: "13px" }}>USD</p>
          </span>
          <span className="Globle-Flex-Row ">
            <p>164,141</p>
            <p style={{ marginTop: "-8px", fontSize: "13px" }}>PKR</p>
          </span>
        </span>
      </div>

      <div className="Globle-Flex-Row sec-top-bar-invoice">
        <div className="Globle-Flex-Row">
          <span>Type</span>
          <p>Custumer</p>
        </div>
        <div className="Globle-Flex-Row" style={{ paddingLeft: "10px" }}>
          <span>Status</span>
          <CustomMenu name={"new"} />
        </div>
        <div className="Globle-Flex-Row" style={{ paddingLeft: "10px" }}>
          <span>Branch</span>
          <input
            type="text"
            id="name"
            placeholder="By Courier"
            className="invoice-input"
          />
        </div>
        <div className="Globle-Flex-Row" style={{ paddingLeft: "10px" }}>
          <span>Mode</span>
          <input
            type="text"
            id="name"
            placeholder="By Courier"
            className="invoice-input"
          />
        </div>
        <div className="Globle-Flex-Row" style={{ paddingLeft: "10px" }}>
          <p>Updated by Mishal Sikander</p>
          <AttachFileIcon className="top-bar-icons" />
          <HistoryIcon className="top-bar-icons" />
          <Menu name={<MoreHorizIcon />}
          itemone={"Re-Open Item"}
          itemtwo={"Change Sale"}
          itemthree={"Duplicate Item"}
          itemfour={"Delete Item"}
          
          />
        </div>
      </div>
    </div>
  );
}
