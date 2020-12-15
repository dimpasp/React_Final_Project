import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import CourseForm from './CourseForm';
import Home from './Home';
import AddNewCourse from './AddNewCourse';
import Footer from './Fouter';
import Instructors from './Instructors';
import CourseDetails from './CourseDetails';
import EditCourse from './EditCourse';




function App ()  {
  return (
    <>
    <Router>
      <MyNavbar />
       <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/CourseForm' component={CourseForm} />
          <Route exact path='/CourseDetails/:id' component={CourseDetails} />
          <Route exact path='/AddNewCourse' component={AddNewCourse} />   
          <Route exact path='/EditCourse/:id' component={EditCourse} />
          <Route exact path='/Instructors' component={Instructors} />
        </Switch>   
      <Footer />
    </Router>
    </>
  );
};
export default App;

