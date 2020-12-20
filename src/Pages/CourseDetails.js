import React, { Component } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import {Link } from "react-router-dom";
import Instructors from "./CallIns";
import { Button } from 'reactstrap';

//Tο χρησιμοποιω για να αφαιρεσω τα HTML tags απο το description
const regex = /(<([^>]+)>)/ig;

class CourseDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          details: null
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

      //Μεθοδος για την διαγραφη του object. Αυτο γινεται χρησιμοποιοντας το id του.
      onDelete(){
        let CourseId = this.state.details.id;
        axios.delete(`http://localhost:3000/courses/${CourseId}`)
          .then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
      }
      
        render() {
           console.log(this.state)
          return (
            //πολυ σημαντικο!!πρωτα φορτωνεται το obj(details) και στην συνεχεια εχουμε προσβαση στα properties.
            this.state.details ?
             <div>
            <form>
               <div class="modal-header">
                  <h2 class="modal-title"  style={{textAlign:'center',marginTop:30 }}>{this.state.details.title}({this.state.details.id})</h2>
               </div>
              <div>
              <Image src={this.state.details.imagePath }  style={{resizeMode: "cover", height: 500,  width:1300 }} fluid />
              </div>
              <div  class="row">
                <div class="col">
                    <div className="modal-body">
                       <h4>Price : {this.state.details.price.normal}</h4>  
                    </div>
                </div>
                <div class="col">
                  <div className="modal-body">
                    <h4>Duration : {this.state.details.duration}</h4>
                   </div>
                </div>
              </div>
              <div  class="row">
                <div class="col">
                    <div className="modal-body">
                    <h4>Bookable : {this.state.details.open ? '√' : null}</h4>
                    </div>
                </div>
                <div class="col">
                  <div className="modal-body">
                  <h4>Dates : {this.state.details.dates.start_date} to {this.state.details.dates.end_date} </h4>  
                   </div>
                </div>
              </div>
               <div class="modal-body">
                <h4>{this.state.details.description.replace(regex, '')}</h4>
               </div>
              <div  class="row" >     
              <Link to={`/EditCourse/${this.state.details.id}`}>
              <Button color="success">Edit</Button></Link>
              <Button color="danger" onClick={this.onDelete.bind(this)}>Delete</Button>
              </div>
              <div class="modal-body">
                 <h2>Instructors</h2>
               </div>
              <hr />  
              <Instructors instructorId={this.state.details.instructors} />       
            </form>
              </div> : "loading"                 
          )
        }
   }
      
export default CourseDetail;


 
    
