import React, { Component } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import {Link } from "react-router-dom";
import Instructors from "./CallIns";
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

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
      onDelete(id, e){
        e.preventDefault();
        let CourseId = this.state.details.id;
        axios.delete(`http://localhost:3000/courses/${CourseId}`)
          .then(response => {
            console.log(response);
            const details = this.state.details.filter(item => item.id !== CourseId);
            this.setState({ details });        
          }).catch(err => console.log(err));
          //επιστροφη στην προηγουμενη σελιδα μετα την διαγραφη!!
          this.props.history.push('/CourseForm'); 
      }

    
        render() {
           console.log(this.state)
          return (
            //πολυ σημαντικο!!πρωτα φορτωνεται το obj(details) και στην συνεχεια εχουμε προσβαση στα properties.
            this.state.details ?
             <div>
            <form>
               <div className="modal-header">
                  <h2 className="modal-title"  style={{textAlign:'center',marginTop:30 }}>{this.state.details.title}({this.state.details.id})</h2>
               </div>
              <div>
              <Image src={this.state.details.imagePath }  style={{resizeMode: "cover", height: 500,  width:1300 }} fluid />
              </div>
              <div  className="row">
                <div className="col">
                    <div className="modal-body">
                       <h4>Price : {this.state.details.price.normal}€</h4>  
                    </div>
                </div>
                <div className="col">
                  <div className="modal-body">
                    <h4>Duration : {this.state.details.duration}</h4>
                   </div>
                </div>
              </div>
              <div  className="row">
                <div className="col">
                    <div className="modal-body">
                    <h4>Bookable : {this.state.details.open ? '√' : null}</h4>
                    </div>
                </div>
                <div className="col">
                  <div className="modal-body">
                  <h4>Dates : {this.state.details.dates.start_date} to {this.state.details.dates.end_date} </h4>  
                   </div>
                </div>
              </div>
               <div className="modal-body">
                <h4>{this.state.details.description.replace(regex, '')}</h4>
               </div>
              <div  className="row" >     
              <Link to={`/EditCourse/${this.state.details.id}`}>
              <Button color="success">Edit</Button></Link>
              <Button color="danger" onClick={(e) => { if(window.confirm('Delete the item?')) this.onDelete(this.state.details.id, e) } }>Delete</Button>
              </div>
              <div className="modal-body">
                 <h2>Instructors</h2>
               </div>
              <hr />  
              <Instructors instructorId={this.state.details.instructors} />       
            </form>
              </div> : "loading"                 
          )
        }
   }
      
export default withRouter(CourseDetail);


 
    
