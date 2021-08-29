import { Formik } from "formik";
import "./style.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import StyledCheckbox from "../../Components/CheckBox/CheckBox";
import Img from "../../Assets/loginimg.png";

export default function LogIn() {
  const [password, setPassword] = useState(false);
  return (
    <div className="login-bg Globle-Flex-Column">
      <div className="login-box">
        <div className="login-content">
          <p className="login-title">Log In to your account</p>

          <div className="login-container">
            <div className="login-input-email">
              <MailOutlineIcon className="icon icon-email" />
              <input
                className="input-email"
                type="email"
                placeholder="ali.suleman@airmed.pk"
              ></input>
            </div>

            <div className="login-input-pass">
              <LockIcon className="icon icon-pass" />
              <div className="div-pass">
                <input
                  className="input-pass"
                  type={password ? "text" : "password"}
                  placeholder="**********"
                ></input>{" "}
              </div>
              <VisibilityOffIcon
                className="icon icon-pass"
                onClick={() => setPassword(!password)}
              />
            </div>

            <div className="login-check">
              <div className="login-remember">
                <div style={{ marginTop: "-10px" }}>
                  <StyledCheckbox className="checkbox-login" />
                </div>
                <p style={{ paddingLeft: "30px" }}>Remember Me </p>
              </div>
              <p>Forgot password?</p>
            </div>

            <button>Log In</button>
          </div>
        </div>
      </div>

      <div className="login-secend-box">
        <div className="logo login-logo">
          <div className="gray-logo gray-login"></div>
          <p className="logo-text  logo-text-login">COSMO</p>
        </div>

        <dix className="login-img">
          {" "}
          <img src={Img} />{" "}
        </dix>
      </div>
    </div>
  );
}
