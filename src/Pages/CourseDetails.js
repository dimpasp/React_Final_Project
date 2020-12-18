import React, { Component } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import {Link } from "react-router-dom";
import { Button } from 'reactstrap';



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
            this.state.details ?
             <div>
            <form>
               <div class="modal-header">
                  <h5 class="modal-title"  style={{textAlign:'center',marginTop:30 }}>{this.state.details.title}({this.state.details.id})</h5>
               </div>
              <div>
              <Image src={this.state.details.imagePath }  style={{resizeMode: "cover", height: 500,  width:1000 }} fluid />
              </div>
              <div  class="row">
                <div class="col">
                    <div className="modal-body">
                       <p>price : {this.state.details.price.normal}</p>  
                    </div>
                </div>
                <div class="col">
                  <div className="modal-body">
                    <p>Duration : {this.state.details.duration}</p>
                   </div>
                </div>
              </div>
              <div  class="row">
                <div class="col">
                    <div className="modal-body">
                    <p>Bookable : {this.state.details.open ? '√' : null}</p>
                    </div>
                </div>
                <div class="col">
                  <div className="modal-body">
                  <p>Dates : {this.state.details.dates.start_date} to {this.state.details.dates.end_date} </p>  
                   </div>
                </div>
              </div>
               <div class="modal-body">
                <p>{this.state.details.description}</p>
               </div>
              <div  class="row" >     
              <Link to={`/EditCourse/${this.state.details.id}`}>
              <Button color="success">Edit</Button></Link>
              <Button color="danger" onClick={this.onDelete.bind(this)}>Delete</Button>
              </div>
              <h3>Instructors</h3>
              <hr />         
            </form>
              </div> : "loading"                 
          )
        }
   }
      
export default CourseDetail;


 
    
