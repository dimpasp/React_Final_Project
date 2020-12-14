import React, { Component } from 'react';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import './TableForFront.css'

//Function για να καλουμε μονο 5 Courses.
//Oυσιαστικα εδω θα επηρεασουμε το length του πινακα
const range = len => {
    const arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(i)
    }
    return arr
  }


class CourseTableForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  //Αυτη ειναι μια lifecycle μεθοδος και εκτελειται την πρωτη φορα του get request
  componentDidMount() {
    axios.get('http://localhost:3000/courses')
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
      <div>
        <h3 id='titleId'>Last five Courses</h3>
        <Table variant="dark">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Bookable</td>
              <td>Price</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.open ? '√' : null}</td>
              <td>{post.price.normal}</td>
              <td>{post.dates.start_date} to {post.dates.end_date}</td>
              <td><a class="btn btn-primary" href="#" role="button">View details</a></td>
            </tr>
            )}

          </tbody>
        </Table>
        <a class="btn btn-success" href="/CourseForm" role="button">View all</a>
      </div>
    )
  }
}
export default CourseTableForm;

