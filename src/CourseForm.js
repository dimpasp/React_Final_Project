import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardTitle, CardText,CardImg,CardLink, CardBody} from 'reactstrap';
import './CourseForm.css'


class CardsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  //Αυτη ειναι μια lifecycle μεθοδος και εκτειλε την πρωτη φορα του get request
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
      <div >
        <h1 id="title">COURSES</h1>
        <div className="grid">
        {
          posts.length ?
            posts.map(post => <td key={post.id}>
              <Card  className="box" >
                <CardTitle class="card-title">{post.title}</CardTitle>
                <CardImg top width="100%" src={post.imagePath}  key={post.id} alt="Card image cap" />
                <CardBody>
                <CardText>Price: {post.price.normal}€ | Bookable:{post.open} √</CardText>
                  <CardText>Duration: {post.duration}</CardText>
                  <CardText>Dates: {post.dates.start_date} - {post.dates.end_date}</CardText>
                  <CardLink variant="primary" href="#">View</CardLink>
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
export default CardsTable;