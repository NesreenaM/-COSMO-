import { Link } from "react-router-dom";
import "./style.css";
import FileCopyIcon from "@material-ui/icons/FileCopy";

export default function SubNavBar() {
  return (
    <div className="Sub-nav-bg">
      <div className="sub-nav-links">
        <Link className="link-color ">Accounts</Link>
        <Link className="link-color ">Sales</Link>
        <Link className="link-color ">Purchases</Link>
        <Link className="link-color ">Company</Link>
        <Link className="link-color ">Reports</Link>
      </div>
      <div className="sub-nav-quick">
        <FileCopyIcon className="copy-icon" />
        <input placeholder="Quick Access" />
        <button>Ctrl+K </button>
      </div>
    </div>
  );
}
