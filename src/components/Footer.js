import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h6>Kavindya Imbulgoda</h6>
            <h8 className="list-unstyled" style={{ color: "gray" }}>
              <li>Undergraduate University of Moratuwa</li>
              <li>Volunteer IEEE</li>
            </h8>
            <div style={{ height: "10px" }}></div>
            <div style={{ color: "gray" }}>
              <a href="https://www.facebook.com/profile.php?id=100013178049044">
                <FacebookIcon />
              </a>
              <a
                href="https://github.com/Kavindya98"
                style={{ marginLeft: "10px" }}
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kavindya-imbulgoda-a0a6b4198"
                style={{ marginLeft: "10px" }}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
