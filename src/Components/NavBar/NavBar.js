import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import NavImg from "../../Assets/nav-img.png";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <div className="logo-section">
          {" "}
          <div className="gray-logo"></div>
          <p className="logo-text">COSMO</p>
        </div>
        <div>
          <Breadcrumbs
            first={"Airmed"}
            second={"Accounting"}
            there={"Accounting"}
            
          />
        </div>
      </div>

      <div className="nav-icons">
        <div className="nav-icons-hover">
          <SearchIcon className="nav-left-icon" />
        </div>
        <div className="nav-icons-hover">
          <NotificationsNoneIcon className="nav-left-icon" />
        </div>
        <div className="nav-icons-hover">
          <HelpOutlineIcon className="nav-left-icon" style={{marginRight:"25px"}} />
        </div>
        <div className="online-icon"> </div>
        <div className="nav-img">
          
          <img src={NavImg} alt="profile-img" />
        </div>
      </div>
    </div>
  );
}
