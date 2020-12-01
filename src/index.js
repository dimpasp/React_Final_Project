import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import MyNavbar from './MyNavbar';


const IndexStructure = () => {
  return (
      <MyNavbar />
      );
    };
ReactDOM.render(<IndexStructure />, document.getElementById("root"));