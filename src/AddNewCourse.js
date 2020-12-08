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
      TitleName: '',
      DurationName: '',
      imageId: '',
      JohnId: '',
      YiannisId: '',
      DescriptionName: '',
      StartDate: '',
      EndDate: '',
      EarlyBird: '',
      NormalPrice: '',

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

  render() {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit}>
        <h1>Add Course</h1>
        <Form.Group >
          <Form.Label>Title Name</Form.Label>
          <Form.Control type="text" name="TitleName" placeholder="Title Name" value={this.state.TitleName} onChange={this.handleChange}/>
        </Form.Group>
        <hr />
        <Form.Group >
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" name="DurationName" placeholder="Duration" value={this.state.DurationName} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.File name="imageId" label="Image for Course" value={this.state.imageId} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Instructors</h1>
        <Form.Group >
          <Form.Check type="checkbox" name="JohnId" label="John Tsevdos" value={this.state.JohnId} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Check type="checkbox" name="YiannisId" label="Yiannis Nikolakopoulos" value={this.state.YiannisId} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="DescriptionName" rows="4" value={this.state.DescriptionName} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Dates</h1>
        <Form.Group >
          <Form.Label>Start Date:</Form.Label>
          <Form.Control type="text" name="StartDate" placeholder="Start Date" value={this.state.StartDate} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Label>End Date:</Form.Label>
          <Form.Control type="text" name="EndDate" placeholder="End Date" value={this.state.EndDate} onChange={this.handleChange} />
        </Form.Group>
        <hr />
        <h1>Price</h1>
        <Form.Group>
          <Form.Label>Early Bird:</Form.Label>
          <Form.Control type="text" name="EarlyBird" placeholder="0" value={this.state.EarlyBird} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Normal price:</Form.Label>
          <Form.Control type="text" name="NormalPrice" placeholder="0" value={this.state.NormalPrice} onChange={this.handleChange} />
        </Form.Group>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
