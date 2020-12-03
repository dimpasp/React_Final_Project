import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Courses from "./Courses";
import AddNewCourse from "./AddNewCourse";


const CustomNavbar = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="index.js">CODE.HUB Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="Courses.js">Courses</Nav.Link>
            <Nav.Link href="AddNewCourse.js">Add new course</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      {/* 
      <Route path="/" component={Home} />
      <Route path="/Courses" component={Courses} />
      <Route path="/AddNewCourse" component={AddNewCourse} />    
      */}
    </Router>
  );
};
export default CustomNavbar;