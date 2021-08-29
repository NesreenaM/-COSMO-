import "./Tabs.css";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalBarIcon from "@material-ui/icons/LocalBar";
export default function Tabs(props) {
  return (
    <div style={{ display: "flex" }}>
      <div className="mytabs">
        {/* <div> */}
        <input type="radio" id="tabfree" name="mytabs" checked="checked" />
        <label for="tabfree">Customer</label>
        <div className="tab">
          <div>{props.tableone}</div>
        </div>

        <input type="radio" id="tabsilver" name="mytabs" />
        <label for="tabsilver">List</label>
        <div className="tab">
          <div>{props.tabletwo}</div>
        </div>

        <input type="radio" id="tabgold" name="mytabs" />
        <label for="tabgold">Detailed</label>
        <div className="tab">
          <div>{props.tablethree}</div>
        </div>
        {/* </div> */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", marginRight: "11px" }}>
          <LocalBarIcon style={{ fontSize: "21px !important", marginRight: "11px" }} />
          <SettingsIcon />
        </div>
      </div>
      <div
        style={{
          fontSize: "21px !important",
          marginTop: "10px",
          color: "#7d7d7d",
          display: "flex",
        }}
      ></div>
    </div>
  );
}
