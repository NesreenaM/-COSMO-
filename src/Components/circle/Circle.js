import React from "react";

export default function Circle(props) {
  return (
    <div className="circle">
      {props.isActive ? (
        <div className="sub-circle" style={{ background: `${props.bg}` }} />
      ) : (
        ""
      )}
    </div>
  );
}
