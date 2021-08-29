import "./SideBarItem.css"
import React from "react";
import { ContextItem } from "../../Layout/layout";
import { useContext } from "react"

export default function SideBarItem(props) {
    const { open, handleChangeto } = useContext(ContextItem);
    return (
        <div>
            <div className="side-bar-item">
               <span >{props.icons}</span>
               <span style={{display: `${open ? "" : "none"}`}}>{props.text}</span>
            </div>
        </div>
    )
}
