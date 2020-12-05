import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './MyNavbar';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import Table from './Courses';


const IndexStructure = () => {
  return (
    <React.Fragment>
      <MyNavbar />,
      <App />
    </React.Fragment>
  );
};
ReactDOM.render(<IndexStructure />, document.getElementById("root"));

