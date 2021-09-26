import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import logo1 from "../../images/logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <>
        <Navbar style={{ backgroundColor: "#6F1425" }}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo1}
                width="250"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <Nav className="me-end nav-style text-secondary">
              <Nav.Link href="#employee">Find Employee</Nav.Link>
              <Nav.Link href="#work">Find Work</Nav.Link>
              <Nav.Link href="#enterpris">Enterprise</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              <Button
                style={{ backgroundColor: "#fbde44", borderRadius: "5px" }}
              >
                Sign Out
              </Button>{" "}
              <Button style={{ borderRadius: "5px" }}>Join</Button>{" "}
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
