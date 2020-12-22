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
      dates: [],
      price: [],
      loading: true,
      formErrors: {
        title: "",
        description: ""
      }
    }
  }

  //Oυσιαστικα εδω κανουμε state την καινουργια τιμη στο input.
  handleChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    //Γινεται ελεγχος του εκασθοτε property
    switch (name) {
      case "title":
        formErrors.title =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "description":
        formErrors.description =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      default:
        break;
    }

    //Setstate για bookable
     if (event.target.name === "open") {
      const { open } = event.target
      this.setState({
        open: !open
      })
    }

     //Setstate για ολα τα υπολοιπα + ελεγχος των error
    else
      this.setState({ formErrors, [name]: value });
  }


  //Setstate για μερες
  handleDate= (event) => {
    const { name, value } = event.target;
    this.setState({ dates: {...this.state.dates, [name]: value }
       });
  }


  //Setstate για τιμες
  handlePrice = (event) => {
    const { name, value } = event.target;
    this.setState({ price: {...this.state.price, [name]: value } 
      });
  }

 //Function για τους instructor.Εφοσον γινει το check κανουμε push στο array το id
  handleInstructors = (event) => {
    const { name, value } = event.target;

      if (name === "JohnTsevdos") 
      { 
        this.state.instructors.push("01");
      }
      if (name === "YiannisNikolakopoulos") 
      { 
        this.state.instructors.push("02");
      } 
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
    //δηλωνουμε τα error για να τα χρησιμοποιησουμε στην φορμα
    const { formErrors } = this.state;

    // να εμφανισει μνμ εαν αποτυχει το request
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
          <Form.Group >
            <Form.Label check="true">{' '}Bookable</Form.Label>
            <Form.Check type="checkbox" name="open" onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <h1>Instructors</h1>
          <Form.Group >
          <Form.Label check="true">{' '}John Tsevdos</Form.Label>
            <Form.Check type="checkbox" name="JohnTsevdos" onChange={this.handleInstructors}  />
          </Form.Group>
          <Form.Group >
          <Form.Label check="true">{' '}Yiannis Nikolakopoulos</Form.Label>
            <Form.Check type="checkbox" name="YiannisNikolakopoulos" onChange={this.handleInstructors}  />
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
            <Form.Control type="text" name="start_date" placeholder="Start Date" value={this.state.start_date} onChange={this.handleDate} />
          </Form.Group>
          <Form.Group >
            <Form.Label>End Date:</Form.Label>
            <Form.Control type="text" name="end_date" placeholder="End Date" value={this.state.dates.end_date} onChange={this.handleDate} />
          </Form.Group>
          <hr />
          <h1>Price</h1>
          <Form.Group>
            <Form.Label>Early Bird:</Form.Label>
            <Form.Control type="text" name="early_bird" placeholder="0" value={this.state.price.early_bird} onChange={this.handlePrice} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Normal price:</Form.Label>
            <Form.Control type="value" name="normal" placeholder="0" value={this.state.price.normal} onChange={this.handlePrice} />
          </Form.Group>
          <hr />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default MyForm;