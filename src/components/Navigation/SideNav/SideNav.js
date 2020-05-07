import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import "./SideNav.css";

const SideNav = (props) => {
  const { changeContent } = props;

  const [selectedNav, setSelectedNav] = useState("");
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMyTasksOpen, setMyTasksOpen] = useState(false);
  const [selectedNavItem, setNavItem] = useState("");

  return (
    <Nav className="bg-light sidenav text-left" vertical>
      <NavItem
        className={(selectedNav === "Profile" ? "orange " : "") + "links p-2"}
        onClick={() => {
          if (!isProfileOpen) {
            setSelectedNav("Profile");
            setMyTasksOpen(false);
          } else setSelectedNav("");
          setProfileOpen(!isProfileOpen);
        }}
      >
        Profile
      </NavItem>
      {isProfileOpen
        ? [
            <NavItem
              className={
                (selectedNavItem === "Settings" ? "text-primary " : "") +
                "links p-2 pl-4"
              }
              onClick={() => {
                setNavItem("Settings");
                changeContent("Settings");
              }}
            >
              Settings
            </NavItem>,
            <NavItem
              className={
                (selectedNavItem === "Notifications" ? "text-primary " : "") +
                "links p-2 pl-4"
              }
              onClick={() => {
                changeContent("Notification");
                setNavItem("Notifications");
              }}
            >
              Notifications
            </NavItem>,
          ]
        : null}

      <NavItem
        className={(selectedNav === "My Tasks" ? "orange " : "") + "links p-2"}
        onClick={() => {
          if (!isMyTasksOpen) {
            setSelectedNav("My Tasks");
            setProfileOpen(false);
          } else setSelectedNav("");

          setMyTasksOpen(!isMyTasksOpen);
        }}
      >
        My Tasks
      </NavItem>
      {isMyTasksOpen
        ? [
            <NavItem
              className={
                (selectedNavItem === "Task 1" ? "text-primary " : "") +
                "links p-2 pl-4"
              }
              onClick={() => {
                setNavItem("Task 1");
                changeContent("Task 1");
              }}
            >
              Task 1
            </NavItem>,
            <NavItem
              className={
                (selectedNavItem === "Task 2" ? "text-primary " : "") +
                "links p-2 pl-4"
              }
              onClick={() => {
                setNavItem("Task 2");
                changeContent("Task 1");
              }}
            >
              Task 2
            </NavItem>,
          ]
        : null}
    </Nav>
  );
};

export default SideNav;
