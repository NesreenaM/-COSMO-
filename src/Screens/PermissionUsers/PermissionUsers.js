import "./style.css";
import Menu from "../../Components/Menu/Menu";
import PermissionUsersTable from "../Tables/PermissionUsersTable";
import CustomMenu from "../../Components/Menu/CustomMenu";

export default function PermissionUsers() {
  return (
    <div className="Permission-container">
      <div className="globel-flexRow permission-box">
        <p>Nate Anderson</p>
        <CustomMenu
          name={"Menu"}
          background={"#E5E5E5"}
          style={{ borderRadius: "2px", width: "89px", height: "29px",fontSize:"16px", marginRight: "32px" }}
        />
      </div>
      <PermissionUsersTable />
    </div>
  );
}
