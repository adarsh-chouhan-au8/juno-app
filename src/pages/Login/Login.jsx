import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import SupportGroup from "../../assets/images/support-group.jpg";

import { ReactComponent as JunoIcon } from "../../assets/images/juno-icon-color.svg";

import { ReactComponent as MicrosoftIcon } from "../../assets/images/microsoft.svg";

import { ReactComponent as AppleIcon } from "../../assets/images/apple-1.svg";

import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";

import { ReactComponent as GoogleIcon } from "../../assets/images/google.svg";

import { MdMailOutline } from "react-icons/md";

import JunoIconColor from "../../assets/images/juno-icon-color@2x.png";

import { ReactComponent as LogoFullWhite } from "../../assets/images/logo-full-white.svg";

const Login = () => {
  return (
    <div className="main-container login">
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
            <div className="heading">Carrier Login</div>

            <form className="login">
              <div className="form-control">
                <input
                  type="text"
                  placeholder=" username or email address"
                  className="input-email"
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder=" ......"
                  className="input-password"
                />
              </div>

              <div className="form-control checkbox">
                <input
                  type="checkbox"
                  placeholder=" email address"
                  className="input-checkbox"
                />
                <label> Remember this device</label>
              </div>

              <div className="btn-1 btn-submit">
                <span>SIGN IN</span>
              </div>

              <div className="nav-links">
                <div> Forgot your username?</div>
                <div className="vert-seprator"></div>
                <div>Forgot your password?</div>
              </div>
            </form>

            <div className="text-2 ">
              Need to register for an account?
              <Link to="/signup"> Sign Up?</Link>
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

export default Login;
