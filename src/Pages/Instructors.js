import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardTitle, CardText, CardBody} from 'reactstrap';
import {Carousel,Image} from 'react-bootstrap'
import './CourseForm.css'



class InstructorsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  //Αυτη ειναι μια lifecycle μεθοδος και εκτελειται την πρωτη φορα του get request
  componentDidMount() {
    axios.get('http://localhost:3000/instructors')
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Error retreiving data' })
      })
  }
  
  render() {
    const { posts } = this.state

    return (
      <div >
        <div>
        <Carousel>
        <Carousel.Item interval={1000}>
          <Image src="code-background-1.png"  style={{resizeMode: "cover", height: 400,  width: 2000 }} fluid />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image src="learn.png"  style={{resizeMode: "cover", height: 400,  width: 2000 }} fluid />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image src="python.png"  style={{resizeMode: "cover", height: 400,  width: 2000 }} fluid />
        </Carousel.Item>
        </Carousel>
        </div>
        <div>
          <h1 style={{textAlign:'center',marginTop:30 }}>Vision</h1>
          <h5 style={{marginLeft:150 ,marginTop:30 }}>Code.Hub is your ideal HR partner whether you are a multinational company, a startup company or an ICT professional.</h5>
          <h5  style={{marginLeft:150 ,marginBottom:30 }}>Our vision is to meet every professional in ICT sector, either by Code.Career, 
             Code.Learn or Code.Event services and connect them to create a powerful Code.Community.</h5>
        </div>
        <div>
        <h1 id="title">Instructors</h1>
        <div className="grid">
        {
          posts.length ?
            posts.map(post => <td key={post.id}>
              <Card  className="box" >
              <CardTitle className="card-title">{post.name.first} {post.name.last}</CardTitle>
                <CardBody>
                  <CardText>Gender: {post.gender}</CardText>
                  <CardText>Date of birth: {post.dob}</CardText>
                  <CardText>Bio: {post.bio}</CardText>
                  <CardText>Hobbies list: {post.hobbies}</CardText> 
                  <CardText><a href="#">{post.email}</a>{" | "}<a href="#">{post.linkedin}</a></CardText>
                </CardBody>
              </Card>
            </td>
            ) : null
        }
        </div>
        </div>
      </div>
    )
  }

}
export default InstructorsForm;
