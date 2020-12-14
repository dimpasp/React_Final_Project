import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardTitle, CardText,CardImg,CardLink, CardBody} from 'reactstrap';



class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  //Αυτη ειναι μια lifecycle μεθοδος και εκτειλε την πρωτη φορα του get request
  componentDidMount() {
    axios.put('http://localhost:3000/courses/{id}')
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
       
      </div>
    )
  }

}
export default EditForm;