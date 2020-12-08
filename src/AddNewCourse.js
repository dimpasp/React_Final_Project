import React from "react";
import { Form } from "react-bootstrap";
import "./Form.css";
import axios from 'axios';

export default class MyForm extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   

    this.state = {
      //Εδω δημιουργουμε τα στοιχεια του αντικειμενου που θα χρησιμοποιησουμε
      TitleName: [],
      DurationName: [],
      imageId: [],
      JohnId: [],
      YiannisId: [],
      DescriptionName: [],
      StartDate: [],
      EndDate: [],
      EarlyBird: [],
      NormalPrice: [],

    };
  }

  // Aυτη η μεθοδος χρησιμοποιειται για να κανουμε ενημερωση το αντικειμενο(φορμα στην περιπτωση).
  // Ουσιαστικα εδω περνει τις τρεχουσες τιμες της καταστασης και στην συνεχεια ενημερωνει το κομματι απο το app που χηριζομαστε.
  handleSubmit = (event) => {
    event.preventDefault();
    const formAsk = {
      TitleName: this.state.TitleName,
      DurationName: this.state.DurationName,
      imageId: this.state.imageId,
      JohnId: this.state.JohnId,
      YiannisId: this.state.YiannisId,
      DescriptionName: this.state.DescriptionName,
      StartDate: this.state.StartDate,
      EndDate: this.state.EndDate,
      EarlyBird: this.state.EarlyBird,
      NormalPrice: this.state.NormalPrice,
    }


    axios
      .post('http://localhost:3000/courses', { formAsk })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  // ειναι μια μεθοδος που ενεργοποιειται οταν βαλουμε ενα value μεσω της onChange.
  //Oυσιαστικα εδω κανουμε state την καινουργια τιμη στο input.
  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit}>
        <h1>Add Course</h1>
        <Form.Group controlId="TitleNameId">
          <Form.Label>Title Name</Form.Label>
          <Form.Control type="text" placeholder="Title Name" value={this.state.value} onChange={this.handleChange}/>
        </Form.Group>
        <hr />
        <Form.Group controlId="DurationId">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" placeholder="Duration" value={this.state.value} onChange={this.handleChange}/>
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
          <Form.Control as="textarea" rows="4" value={this.state.value} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Dates</h1>
        <Form.Group controlId="StartDate">
          <Form.Label>Start Date:</Form.Label>
          <Form.Control type="text" placeholder="Start Date" value={this.state.value} onChange={this.handleChange} />
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
          <Form.Control type="text" placeholder="0" value={this.state.value} onChange={this.handleChange} />
        </Form.Group>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
