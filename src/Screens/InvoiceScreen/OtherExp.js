import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function OtherExp() {
  return (
    <div className="other-exp">
      <div className="exp-title">
        <p>
          Other Expenses <ArrowDropDownIcon style={{ marginBottom: "-4px" }} />{" "}
        </p>
      </div>

      <div className="tax ">
        <div className="first-column">
          <p>Tax</p>
          <p style={{ margin: "13px 0" }}>Tax</p>
          <p>Discount</p>
        </div>
        <div>
          {" "}
          <div style={{ display: "flex" }}>
            {" "}
            <p>General Sales </p>{" "}
            <ArrowDropDownIcon className="drop-down-icon" />{" "}
          </div>
          <div style={{ display: "flex", margin: "10px 0" }}>
            {" "}
            <p>General Sales </p>{" "}
            <ArrowDropDownIcon className="drop-down-icon" />
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <p>General Sales </p>{" "}
            <ArrowDropDownIcon className="drop-down-icon" />{" "}
          </div>
        </div>

        <div>
          {" "}
          <p>50%</p>
          <p style={{ margin: "13px 0" }}>50%</p>
          <p>50%</p>
        </div>

        <div>
          {" "}
          <span className="Globle-Flex-Row ">
            <p>1060 </p>
            <p style={{ marginTop: "-8px", fontSize: "10px" }}>USD</p>
          </span>
          <span className="Globle-Flex-Row " style={{ margin: "13px 0" }} >
            <p>1060 </p>
            <p style={{ marginTop: "-8px", fontSize: "10px" }}>USD</p>
          </span>
          <span className="Globle-Flex-Row ">
            <p>1060 </p>
            <p style={{ marginTop: "-8px", fontSize: "10px" }}>USD</p>
          </span>
        </div>
      </div>
    </div>
  );
}
