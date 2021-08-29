// import "style.css"
import GLExtraBody from "./GLExtraBody";
import GLExtraHeader from "./GLExtraHeader";
import SubNavBar from "../../Components/SubNavBar/SubNavBar"

export default function GLExtra() {
  return (
    <div className="GLExtra-Screen">
      <SubNavBar />
      <GLExtraHeader />
      <GLExtraBody />
    </div>
  );
}
