import React from 'react';
import ReactDOM from 'react-dom';
import CustomNavbar from MyNavbar.js;

const IndexStructure = () => {
  return (
      <CustomNavbar />
      );
    };
ReactDOM.render(<IndexStructure />, document.getElementById("root"));