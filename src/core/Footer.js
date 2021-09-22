import React from "react";
import { EnvelopeOpen } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import "../styles.css";
const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
const Footer = () => (
  <div>
    <footer className="footer">
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              className="img"
              alt="klarna"
              src={process.env.PUBLIC_URL + "/assets/nedladdning.png"}
            ></img>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
            <Mailto email="per@4safeair.se" subject="" body="">
              <EnvelopeOpen
                color="white"
                className="mr-4"
                style={{ marginRight: "10%", width: "40px", height: "40px" }}
              ></EnvelopeOpen>
            </Mailto>
            <Link
              to={{ pathname: "https://www.instagram.com" }}
              target="_blank"
            >
              <Instagram
                color="white"
                className="mr-4 ml-4"
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  width: "40px",
                  height: "40px",
                }}
              ></Instagram>
            </Link>
            <Link
              to={{
                pathname: "https://www.facebook.com/4SAFE-AIR-108122174828220",
              }}
              target="_blank"
            >
              <Facebook
                color="white"
                className="ml-4"
                style={{ marginLeft: "10%", width: "40px", height: "40px" }}
              ></Facebook>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
            <div className="footer-text">© 4SafeAir</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
