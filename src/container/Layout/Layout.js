import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import Notification from "../../components/Notification/Notification";
import SideNav from "../../components/Navigation/SideNav/SideNav";
import Settings from "../../components/Settings/Settings";
import Task from "../../components/Task/Task";
import HomePage from "../../components/HomePage/HomePage";

const Layout = (props) => {
  const [selectedItem, setSelectedItem] = useState("");

  let mainContent = null;
  if (selectedItem === "") {
    mainContent = <HomePage />;
  } else if (selectedItem === "Settings") {
    mainContent = <Settings />;
  } else if (selectedItem === "Notification") {
    mainContent = <Notification />;
  } else if (selectedItem === "Task 1") {
    mainContent = <Task />;
  }

  return (
    <div className="mh-100">
      <Navbar color="primary" dark>
        <NavbarBrand href="/">Jupiter</NavbarBrand>
        <Nav className="text-light">
          <NavItem className="mr-3">
            <i className="fas fa-user d-block"></i>
            Mahesh
          </NavItem>
        </Nav>
      </Navbar>
      <div className="mh-100">
        <Container className="container-fluid mw-100 p-0 vh-100">
          <Row>
            <Col lg="2">
              <SideNav changeContent={setSelectedItem} />
            </Col>
            <Col lg="10" className="vh-100">
              {mainContent}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
