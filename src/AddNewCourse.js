import React from "react";
import { Form } from "react-bootstrap";
import "./Form.css";
import axios from 'axios';


class MyForm extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   

    this.state  = {
      //Εδω δημιουργουμε τα στοιχεια του αντικειμενου που θα χρησιμοποιησουμε
      id:'',
      title: '',
      open: '',
      duration: '',
      imagePath: '',
      description: '',
      dates:{
        start_date: '',
        end_date: ''
         },
      price:{
          normal: '' , 
          early_bird: ''
      },
      loading: true,
      error: false,
    };
  }
// ειναι μια μεθοδος που ενεργοποιειται οταν βαλουμε ενα value μεσω της onChange.
  //Oυσιαστικα εδω κανουμε state την καινουργια τιμη στο input.
  handleChange(event) {
   console.log(event.target.name);
   
    this.setState({ [event.target.name] : event.target.value });

  }
  // Aυτη η μεθοδος χρησιμοποιειται για να κανουμε ενημερωση το αντικειμενο(φορμα στην περιπτωση).
  // Ουσιαστικα εδω περνει τις τρεχουσες τιμες της καταστασης και στην συνεχεια ενημερωνει το κομματι απο το app που χηριζομαστε.
  handleSubmit = (event) => {
    event.preventDefault()
    {/*
      AYTH TH ΦΟΡΜΑ ΧΡΗΣΙΜΟΠΟΙΟΥΣΑ!!

       const courses = {
      title: this.state.title,
      open:this.state.open,
      duration: this.state.duration,
      imagePath: this.state.imagePath,
      description: this.state.description,
      dates:{
        start_date: this.state.start_date,
        end_date: this.state.end_date
         },
      price:{
        normal: this.state.normal , 
        early_bird:this.state.early_bird 
             }
    }
    
    */}
    axios
      .post('http://localhost:3000/courses',this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => { // log request error and prevent access to undefined state
        this.setState({ loading: false, error: true });
        console.error(err); 
      })
  }

  render() {

    if (this.state.error ) { // if request failed or data is empty don't try to access it either
    return(
      <div>
        <p> An error occured </p>
      </div>
    )
  }
    return (
      <div>
        <h1 style={{textAlign:'center',marginTop:10 }}>Add Course</h1>
      <form id="contact-form" onSubmit={this.handleSubmit}>
        <Form.Group >
          <Form.Label>Title Name</Form.Label>
          <Form.Control type="text" name="title" placeholder="Title Name" value={this.state.title} onChange={this.handleChange}/>
        </Form.Group>
        <hr />
        <Form.Group >
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" name="duration" placeholder="Duration" value={this.state.duration} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.File name="imagePath" label="Image for Course" value={this.state.imagePath} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Instructors</h1>
        <Form.Group >
           <Form.Check type="checkbox" name="01" label="John ?" />
         </Form.Group>
         <Form.Group >
           <Form.Check type="checkbox" name="02" label="Yiannis ?" />
         </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" rows="4" value={this.state.description} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Dates</h1>
        <Form.Group >
          <Form.Label>Start Date:</Form.Label>
          <Form.Control type="text" name="start_date" placeholder="Start Date" value={this.state.start_date} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Label>End Date:</Form.Label>
          <Form.Control type="text" name="end_date" placeholder="End Date" value={this.state.end_date} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Price</h1>
        <Form.Group>
          <Form.Label>Early Bird:</Form.Label>
          <Form.Control type="text" name="early_bird" placeholder="0" value={this.state.early_bird} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Normal price:</Form.Label>
          <Form.Control type="value" name="normal" placeholder="0" value={this.state.normal} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group >
           <Form.Check type="checkbox" name="open" label="Bookable ?" />
         </Form.Group>
        <input type="submit" value="Submit"  />
      </form>
      </div>
    );
  }
}
export default  MyForm ;