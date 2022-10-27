import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

import SupportGroup from "../../assets/images/support-group.jpg";

import { ReactComponent as JunoIcon } from "../../assets/images/juno-icon-color.svg";

import { ReactComponent as MicrosoftIcon } from "../../assets/images/microsoft.svg";

import { ReactComponent as AppleIcon } from "../../assets/images/apple-1.svg";

import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";

import { ReactComponent as GoogleIcon } from "../../assets/images/google.svg";

import { MdMailOutline } from "react-icons/md";

import { ReactComponent as LogoFullWhite } from "../../assets/images/logo-full-white.svg";

import JunoIconColor from "../../assets/images/juno-icon-color@2x.png";

import AppleIconColor from "../../assets/images/apple.png";

const Signup = () => {
  return (
    <div className="main-container">
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
            <div className="heading">Carrier: Register</div>
            <div className="sub-heading">
              Carrier For Specialty Insurance Sea, Pro Ex Sumo Rationibus,
              Inermis Gubergren Ea Has.
            </div>

            <div className="signup-icons">
              <div className="lateral-heading">
                Sign up with an existing account
              </div>
              <div className="icons">
                <div className="google-icon">
                  <GoogleIcon />
                </div>
                <div className="apple-icon">
                  {" "}
                  <img
                    className="apple-icon-1"
                    src={AppleIconColor}
                    alt="apple-icon"
                  />
                </div>
                <div className="facebook-icon">
                  <FacebookIcon />
                </div>
                <div className="microsoft-icon">
                  {" "}
                  <MicrosoftIcon />
                </div>
              </div>
            </div>

            <div className="seperator">
              <div className="left-border"></div>
              <div className="seperator-text">OR</div>
              <div className="right-border"></div>
            </div>
            <div className="btn-1">
              <MdMailOutline className="mail-icon" />{" "}
              <span> SIGN UP WITH EMAIL </span>
            </div>
            <div className="go-to-login">
              Already have an account? <Link to="/">Go to Login</Link>
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

export default Signup;
