import React from "react";

import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Article from "./Article";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav style={{ marginLeft: "40px" }}>
          <Nav.Link as={NavLink} to="/myportofolio/">
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/myportofolio/volunteer"
            style={{ marginLeft: "40px" }}
          >
            Volunteering
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/myportofolio/projects"
            style={{ marginLeft: "40px" }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/myportofolio/blogs"
            style={{ marginLeft: "40px" }}
          >
            Blogs
          </Nav.Link>
          <Nav.Link
            href="https://www.facebook.com/profile.php?id=100013178049044"
            style={{ marginLeft: "310px" }}
          >
            <FacebookIcon />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/Kavindya98"
            style={{ marginLeft: "20px" }}
          >
            <GitHubIcon />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/kavindya-imbulgoda-a0a6b4198"
            style={{ marginLeft: "20px" }}
          >
            <LinkedInIcon />
          </Nav.Link>
          <a
            href="https://drive.google.com/drive/u/0/folders/1MCwAByODybfa5zlWrOYl94TwU5Ifvjf6"
            rel="opener noreferrer"
            target="_blank"
          >
            <Button
              style={{
                backgroundColor: "#212529",
                borderColor: "rgba(225,225,225)",

                marginLeft: "20px",
                opacity: 0.6,
                marginTop: "3px",
              }}
            >
              Resume
            </Button>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
