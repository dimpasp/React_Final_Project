import React from "react";
import { Form } from "react-bootstrap";
import "./Form.css";
import axios from 'axios';


//Δημιουργια validation για την φορμα
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate εαν ειναι κενο το value
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate εαν ειναι κενο το value
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      id: '',
      title: null,
      open: false,
      duration: '',
      imagePath: '',
      instructors: [],
      description: null,
      dates: {
        start_date: '',
        end_date: ''
      },
      price: {
        normal: '',
        early_bird: ''
      },
      loading: true,
      formErrors: {
        title: "",
        description: ""
      }
    }
  }



  // ειναι μια μεθοδος που ενεργοποιειται οταν βαλουμε ενα value μεσω της onChange.
  //Oυσιαστικα εδω κανουμε state την καινουργια τιμη στο input.
  handleChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    //Γινεται ελεγχος του εκασθοτε property
    switch (name) {
      case "title":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "description":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    //Setstate για καθε κλασση
    if (event.target.name === "normal" || event.target.name === "early_bird") {
      this.setState((price) => {
        return {
          ...price,
          [name]: value
        };
      });
    }

    else if (event.target.name === "start_date" || event.target.name === "end_date") {
      this.setState((dates) => {
        return {
          ...dates,
          [name]: value
        };
      });
    }

    else if (event.target.name === "open") {
      const { open } = event.target
      this.setState({
        open: !open
      })
    }

    else
      this.setState({ formErrors, [name]: value });
  }



  // Aυτη η μεθοδος χρησιμοποιειται για να κανουμε ενημερωση το αντικειμενο(φορμα στην περιπτωση).
  handleSubmit = (event) => {
    event.preventDefault()

    //check for error
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        title: ${this.state.title}
        description: ${this.state.description}
      `);
    } else {
      alert("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    // Ουσιαστικα μεσω του axios στελνουμε τα δεδομενα.
    axios
      .post('http://localhost:3000/courses', this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      // log request error and prevent access to undefined state
      .catch(err => {
        this.setState({ loading: false, error: true });
        console.error(err);
      })
  }


  render() {
    const { formErrors } = this.state;

    // if request failed or data is empty don't try to access it either
    if (this.state.error) {
      return (
        <div>
          <p> An error occured </p>
        </div>
      )
    }

    return (
      <div>
        <h1 style={{ textAlign: 'center', marginTop: 10 }}>Add Course</h1>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Label>Title Name</Form.Label>
            <Form.Control type="text" name="title" className={formErrors.title.length > 0 ? "error" : null} placeholder="Title Name" value={this.state.title} onChange={(e) => { this.handleChange(e) }} />
          </Form.Group>
          <hr />
          <Form.Group >
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" name="duration" placeholder="Duration" value={this.state.duration} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" name="imagePath" placeholder="Path for image" value={this.state.imagePath} onChange={this.handleChange} />
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
            <Form.Control as="textarea" name="description" className={formErrors.description.length > 0 ? "error" : null} rows="4" value={this.state.description} onChange={this.handleChange} />
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
            <Form.Label check="true">{' '}Bookable</Form.Label>
            <Form.Check type="checkbox" name="open" onChange={this.handleChange} />
          </Form.Group>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default MyForm;