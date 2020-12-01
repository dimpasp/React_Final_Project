import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">CODE .HUB</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Courses</Nav.Link>
          <Nav.Link href="#">Add new course</Nav.Link>
        </Nav>
      </Navbar>
    );
  };