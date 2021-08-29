import "./style.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import GroupIcon from "@material-ui/icons/Group";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import { Link } from "react-router-dom";

export default function SettingSubSideBar() {
  return (
    <div className="setting-container">
      <Link className="global-flexrow ">
        <ViewListIcon />
        <span>Overview </span>
      </Link>
      <Link className="global-flexrow ">
        <GroupIcon />
        <span>Teams </span>
      </Link>
      <Link className="global-flexrow " to="/PermissionUsers">
        <AccountBoxIcon />
        <span>Permissions </span>
      </Link>
      <Link className="global-flexrow ">
        <FolderSharedIcon />
        <span>Approvels </span>
      </Link>

      <Link className="global-flexrow ">
        <NotificationsNoneIcon />
        <span>Notification </span>
      </Link>
      <Link className="global-flexrow ">
        <FolderOpenIcon />
        <span>Directory </span>
      </Link>
    </div>
  );
}
