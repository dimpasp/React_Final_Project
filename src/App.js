import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyNavbar from './NavbarFouter/MyNavbar';
import CourseForm from './Pages/CourseForm';
import Home from './Home';
import AddNewCourse from './Pages/AddNewCourse';
import Footer from './NavbarFouter/Fouter';
import Instructors from './Pages/Instructors';
import CourseDetails from './Pages/CourseDetails';
import EditCourse from './Pages/EditCourse';





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

