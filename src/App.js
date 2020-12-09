import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import CourseForm from './CourseForm';
import Home from './Home';
import AddNewCourse from './AddNewCourse';
import Footer from './Fouter';
import Instructors from './Instructors';





function App ()  {
  return (
    <>
    <Router>
      <MyNavbar />
       <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/CourseForm' component={CourseForm} />
          <Route path='/AddNewCourse' component={AddNewCourse} />   
          <Route path='/Instructors' component={Instructors} />
        </Switch>   
      <Footer />
    </Router>
    </>
  );
};
export default App;

