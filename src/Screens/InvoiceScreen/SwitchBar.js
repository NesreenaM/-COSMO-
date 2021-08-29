import Circle from "../../Components/circle/Circle";
import "./style.css";

export default function SwitchBar() {
  return (
    <div className=" wrapper-SwitchBar">
      <div className="wrapper-subItem">
        <div className="circle-wrapper">
          <Circle isActive={true} />
          <span className="switchBar-span">invoice</span>
        </div>
        <hr className="switchBar-hr" />
        <div className="circle-wrapper left-circle">
          <Circle isActive={false} />
          <span className="switchBar-span">Payment</span>
        </div>
      </div>
    </div>
  );
}
