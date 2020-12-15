import React, { Component } from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import "./Form.css";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";



class CourseDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          details: ''
        }
      }
      //Αυτη ειναι μια lifecycle μεθοδος και εκτειλε την πρωτη φορα του get request
      componentDidMount(id) {
        let CourseId = this.props.match.params.id;
        axios.get(`http://localhost:3000/courses/${CourseId}`)
        .then(response => {
          this.setState({details: response.data}, () => {
            console.log(this.state);
          })
          })
          .catch(error => {
            console.log(error)
            this.setState({ errorMsg: 'Error retreiving data' })
          })
      }
      onDelete(){
        let CourseId = this.state.details.id;
        axios.delete(`http://localhost:3000/courses/${CourseId}`)
          .then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
      }
      
    
        render() {

          return (
            <Form id="contact-form">
               <Form.Group >
               <Form.Label>Title Name  </Form.Label>
               <Form.Control type="text" name="TitleName"  value={this.state.details.title}/>
              </Form.Group>

              <Image src={this.state.details.imagePath }  style={{resizeMode: "cover", height: 50,  width: 50 }} fluid />
              <Form.Group >
               <Form.Label>Price  </Form.Label>
               <Form.Control type="text" name="price"  value={this.state.details.price }/>
              </Form.Group>
              <Form.Group >
               <Form.Label>dates  </Form.Label>
               <Form.Control type="text" name="dates"  value={this.state.details.dates }/>
              </Form.Group>
              <Form.Group >
               <Form.Label>Bookable  </Form.Label>
               <Form.Control type="text" name="Bookable"  value={this.state.details.open ? '√' : null}/>
              </Form.Group>
              <Form.Group >
               <Form.Label>Duration </Form.Label>
               <Form.Control type="text" name="duration"  value={this.state.details.duration}/>
              </Form.Group> 
              <Form.Group >
               <Form.Label>description  </Form.Label>
               <Form.Control  as="textarea" rows={3} name="description"  value={this.state.details.description}/>
              </Form.Group>       

              <Link className="btn" to={`/EditCourse/${this.state.details.id}`}> Edit</Link>

              <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>


              </Form>         
          )
        }
      }
export default CourseDetail;


 
    
