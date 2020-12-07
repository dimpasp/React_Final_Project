import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import Courses from './Courses';
import Home from './Home';
import AddNewCourse from './AddNewCourse';
import Footer from './Fouter';




function App ()  {
  return (
    <>
    <Router>
      <MyNavbar />
      <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/Courses' component={Courses} />
          <Route path='/AddNewCourse' component={AddNewCourse} />
        </Switch>   
        <Footer />
    </Router>
    </>
  );
};
export default App;

