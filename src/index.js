import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './MyNavbar';
import Table from './Stats'





const IndexStructure = () => {
  return (
    <React.Fragment>
      <MyNavbar />,
      <App />,
      <Table />
    </React.Fragment>
  );
};
ReactDOM.render(<IndexStructure />, document.getElementById("root"));

