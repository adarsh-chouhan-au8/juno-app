import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignupByEmail.css";

import SupportGroup from "../../assets/images/support-group.jpg";

import { ReactComponent as JunoIcon } from "../../assets/images/juno-icon-color.svg";

import { ReactComponent as MicrosoftIcon } from "../../assets/images/microsoft.svg";

import { ReactComponent as AppleIcon } from "../../assets/images/apple-1.svg";

import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";

import { ReactComponent as GoogleIcon } from "../../assets/images/google.svg";
import JunoIconColor from "../../assets/images/juno-icon-color@2x.png";

import { MdMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import { ReactComponent as LogoFullWhite } from "../../assets/images/logo-full-white.svg";

const SignupByEmail = () => {
  return (
    <div className="main-container signup-by-email">
      <div className="container">
        <div className="col-left">
          <div className="register-section">
            {/* <JunoIcon className="juno-icon" /> */}
            <img
              className="juno-icon"
              src={JunoIconColor}
              alt="juno-icon-color@2x"
            />

            {/* <span className="j-icon">
                        j
                        </span> */}
            <div className="heading">Carrier Register?</div>
            <div className="sub-heading">
              Carrier For Specialty Insurance Sea, Pro Ex Sumo Rationibus,
              Inermis Gubergren Ea Has.
            </div>

            <form>
              <div className="input-fields-1">
                <div className="form-control">
                  <input type="text" placeholder=" First Name" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder=" Last Name" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder=" Email address" />
                </div>

                <div className="form-control">
                  <input type="password" placeholder="Password" />
                </div>

                <div className="form-control">
                  <input type="password" placeholder=" Confirm Password" />
                </div>
              </div>

              <div className="next-navigation">
                <span>
                  next <FaArrowRight className="right-arrow" />{" "}
                </span>
              </div>
            </form>

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

export default SignupByEmail;
