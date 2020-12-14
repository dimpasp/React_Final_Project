import React, { Component } from 'react';
import axios from 'axios'
import { Form } from "react-bootstrap";


class CourseDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          posts: []
        }
      }
      //Αυτη ειναι μια lifecycle μεθοδος και εκτειλε την πρωτη φορα του get request
      componentDidMount(id) {
        axios.get(`http://localhost:3000/courses/${id}`)
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
            //posts.map(post => <tr key={post.id}>
         <Form>

         </Form>
        )
      }
    
    }
export default CourseDetail;


 
    
