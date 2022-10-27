import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

import SupportGroup from "../../assets/images/support-group.jpg";

import { ReactComponent as JunoIcon } from "../../assets/images/juno-icon-color.svg";

import { ReactComponent as MicrosoftIcon } from "../../assets/images/microsoft.svg";

import { ReactComponent as AppleIcon } from "../../assets/images/apple-1.svg";

import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";

import { ReactComponent as GoogleIcon } from "../../assets/images/google.svg";

import { MdMailOutline } from "react-icons/md";
import JunoIconColor from "../../assets/images/juno-icon-color@2x.png";

import { ReactComponent as LogoFullWhite } from "../../assets/images/logo-full-white.svg";

const ForgotPassword = () => {
  return (
    <div className="main-container forgot-password">
      <div className="container">
        <div className="col-left">
          <div className="register-section">
            <img
              className="juno-icon"
              src={JunoIconColor}
              alt="juno-icon-color@2x"
            />

            {/* <JunoIcon className="juno-icon"/> */}
            {/* <span className="j-icon">
                        j
                        </span> */}
            <div className="heading">Forgot Your Password?</div>
            <div className="sub-heading">
              Enter the email address you used to register your account.
            </div>

            <form className="forgot-password">
              <div className="form-control">
                <input
                  type="text"
                  placeholder=" email address"
                  className="input-email"
                />
              </div>

              <div className="btn-1 btn-submit">
                <span>NEXT</span>
              </div>
              <div className="text-2 ">
                <Link to="/">Cancel</Link>
              </div>
            </form>

            <div className="text-2 forgot">
              <Link to="/register">Forgot Your Password?</Link>
            </div>

            <div className="footer">
              Copyright © 2022, Juno. All Rights Reserved
            </div>
          </div>
        </div>
        <div className="col-right">
          <LogoFullWhite className="juno-jumbotron" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
