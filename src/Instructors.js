import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardTitle, CardText, CardBody} from 'reactstrap';
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
        <h1 id="title">Instructors</h1>
        <div className="grid">
        {
          posts.length ?
            posts.map(post => <td key={post.id}>
              <Card  className="box" >
              <CardTitle class="card-title">{post.name.first} {post.name.last}</CardTitle>
                <CardBody>
                  <CardText>Gender: {post.gender}</CardText>
                  <CardText>Email: {post.email}</CardText>
                  <CardText>Linkedin profil: {post.linkedin}</CardText>
                  <CardText>Date of birth: {post.dob}</CardText>
                  <CardText>Bio: {post.bio}</CardText>
                  <CardText>Hobbies list: {post.hobbies}</CardText>
                </CardBody>
              </Card>
            </td>
            ) : null
        }
        </div>
      </div>
    )
  }

}
export default InstructorsForm;

//thank you for your preference