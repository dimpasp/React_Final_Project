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
          dates:{
            start_date: '',
            end_date: ''
             },
          price:{
              normal: '' , 
              early_bird: ''
          }
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
            normal:response.data.price.normal,
            early_bird:response.data.price.early_bird,
            start_date:response.data.dates.start_date,
            end_date:response.data.dates.end_date,
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

//στελνουμε τα δεδομενα του update μεσω του Put request

      EditCourse (newCourse) {
    axios.request({
      method:'put',
      url:`http://localhost3000/courses/${this.state.id}`,
      data: newCourse
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

//περναμε τις αλλαγες που θελουμε στο καινουργιο/ανανεωμενο object(συνολικα)
  onSubmit(e){
    const newCourse = {
      title: this.name.title.value,
      duration: this.name.duration.value,
      description: this.name.description.value,
      normal:this.name.normal.value,
      early_bird:this.name.early_bird.value,
      start_date:this.name.start_date.value,
      end_date:this.name.end_date.value
    }
    this.updateCourse(newCourse);
    e.preventDefault();
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
       <form id="contact-form" onSubmit={this.onSubmit.bind(this)} style={{textAlign:'center',marginTop:10 }}>
          <Form.Group >
            <Form.Label>Title Name  </Form.Label>
            <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.File name="imagePath" label="Image for Course" value={this.state.imagePath} onChange={this.handleInputChange} />
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
            <Form.Control type="text" name="start_date" value={this.state.start_date} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Date end :  </Form.Label>
            <Form.Control type="text" name="end_date" value={this.state.end_date} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Duration : </Form.Label>
            <Form.Control type="text" name="duration" value={this.state.duration} onChange={this.handleInputChange} />
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
