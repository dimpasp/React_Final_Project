import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Button, change, onSubmit } from "react-bootstrap";
import "./Form.css";
import axios from 'axios';


{/* 

   // function gia to validation

validate = () => {
  let isError = false;
  const errors = {
    TitleName: "",
  };
  if (this.state.TitleName.length < 5) {
    isError = true;
    errors.TitleNameError = "TitleName needs to be atleast 5 characters long";
  }
  return isError;
};

*/}



export default class MyForm extends React.Component {

  //Εδω δημιουργουμε τα στοιχεια του αντικειμενου που θα χρησιμοποιησουμε
  state = {
    TitleName: [],
    DurationName: [],
    imageId: [],
    JohnId: [],
    YiannisId: [],
    DescriptionName: [],
    StartDate: [],
    EndDate: [],
    EarlyBird: [],
    NormalPrice: []

  }
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

      // Aυτη η μεθοδος χρησιμοποιειται για να κανουμε ενημερωση το αντικειμενο(φορμα στην περιπτωση).
      // Ουσιαστικα εδω περνει τις τρεχουσες τιμες της καταστασης και στην συνεχεια ενημερωνει το κομματι απο το app που χηριζομαστε.
      handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
        fetch('http://localhost:3001/courses', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
        }).then(function(response) {
          console.log(response)
          return response.json();
        });
  
      event.preventDefault();
    }

     // ειναι μια μεθοδος που ενεργοποιειται οταν βαλουμε ενα value μεσω της onChange.
      //Oυσιαστικα εδω κανουμε state την καινουργια τιμη στο input.
    handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Add Course</h1> 
          <Form.Group controlId="TitleNameId">
            <Form.Label>Title Name</Form.Label>
            <Form.Control type="text" placeholder="Title Name" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <Form.Group controlId="DurationId">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" placeholder="Duration" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.File id="imageId" label="Image for Course" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <h1>Instructors</h1>
          <Form.Group controlId="JohnId">
            <Form.Check type="checkbox" label="John Tsevdos" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="YiannisId">
            <Form.Check type="checkbox" label="Yiannis Nikolakopoulos" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <Form.Group controlId="DescriptionName">
            <Form.Label>Description</Form.Label>
            <Form.Control rows={3} value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <h1>Dates</h1>
          <Form.Group controlId="StartDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control type="text" placeholder="Start Date"  value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="EndDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control type="text" placeholder="End Date" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <h1>Price</h1>
          <Form.Group controlId="EarlyBird">
            <Form.Label>Early Bird:</Form.Label>
            <Form.Control type="text" placeholder="0" value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="NormalPrice">
            <Form.Label>Normal price:</Form.Label>
            <Form.Control type="text" placeholder="0"value={this.state.value} onChange={this.handleChange} />
          </Form.Group>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}
