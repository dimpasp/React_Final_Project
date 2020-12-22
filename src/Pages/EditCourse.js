import React, { Component } from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import "./Form.css";


class EditCourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:'',
          title: '',
          duration: '',
          imagePath: '',
          description: '',
          instructors: [],
          dates:[],
          price:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }
     
//αρχικα ελεγχουμε αν το id που τσεκαρουμε υπαρχει.
//Εφοσον υπαρχει φερνουμε ολα τα data του object του.
      componentDidMount(id) {
        let CourseId = this.props.match.params.id;
        axios.get(`http://localhost:3000/courses/${CourseId}`)
        .then(response => {
          this.setState({
            id: response.data.id,
            imagePath:response.data.imagePath,
            early_bird:response.data.price.early_bird,
            normal:response.data.price.normal,
            dates:response.data.dates,
            instructors:response.data.instructors,
            title: response.data.title,
            duration: response.data.duration,
            description:response.data.description
          }, () => {
            console.log(this.state);
          });
        }) .catch(error => {
            console.log(error)
            this.setState({ errorMsg: 'Error retreiving data' })
          })
      }
      FuncInstructors = (event) => {
        const { name, submit } = event.target;
        if (submit) {
          if (name === "JohnTsevdos") { this.state.instructors.push("01");
          }
          if (name === "YiannisNikolakopoulos") { this.state.instructors.push("02");
          }
        }
        //εαν δεν γινει submit παλι πρεπει να επιστρεψουμε τιμη (!id) λογω του length του array
        else {
          if (name === "JohnTsevdos") { this.state.instructors = this.state.instructors.filter(function (event) { return event !== "01" })
          }
          if (name === "YiannisNikolakopoulos") { this.state.instructors = this.state.instructors.filter(function (event) { return event !== "02" })
          }
        }
      }

//στελνουμε τα δεδομενα του update μεσω του Put request

  onSubmit(id, e){
    e.preventDefault();
    axios.put(`http://localhost:3000/courses/${this.state.id}`, this.state)
      .then(response => {
        console.log(response);       
      }).catch(err => console.log(err));
      this.props.history.push('/CourseForm'); 
  }

  //περναει η καθε αλλαγη ξεχωριστα
  handleInputChange(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  //εμφανιζουμε το ηδη υπαρχον αντικειμενο και δινουμε την δυνατοτητα αλλαγης
  render(){
    return (
     <div >
        <br />
       <h1 style={{textAlign:'center',marginTop:30 }}>Edit Course</h1>
       <form id="contact-form" onSubmit={(e)=>this.onSubmit(this.state.id,e)}>
          <Form.Group >
            <Form.Label>Title Name  </Form.Label>
            <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" name="imagePath" placeholder="Path for image" value={this.state.imagePath} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Price Early :  </Form.Label>
            <Form.Control type="text" name="early_bird" value={this.state.early_bird} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Normal Price : </Form.Label>
            <Form.Control type="text" name="normal" value={this.state.normal} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Date start :  </Form.Label>
            <Form.Control type="text" name="start_date" value={this.state.dates.start_date} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Date end :  </Form.Label>
            <Form.Control type="text" name="end_date" value={this.state.dates.end_date} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Duration : </Form.Label>
            <Form.Control type="text" name="duration" value={this.state.duration} onChange={this.handleInputChange} />
          </Form.Group>
          <h1>Instructors</h1>
          <Form.Group >
            <Form.Check type="checkbox" label="John Tsevdos" name="JohnTsevdos" onChange={this.FuncInstructors}  />
          </Form.Group>
          <Form.Group >
            <Form.Check type="checkbox" label="Yiannis Nikolakopoulos" name="YiannisNikolakopoulos" onChange={this.FuncInstructors}  />
          </Form.Group>
          <Form.Group >
            <Form.Label>Description : </Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} />
          </Form.Group>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditCourse;
