import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardTitle, CardText, Row, Col ,CardLink} from 'reactstrap';


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

  //Δημιουργουμε εναν πινακα για τα αντικειμενα.
  render() {
    const { posts } = this.state

    return (
        <div>
            <h3 id='title'>Stats about company</h3>
            <Row>
                <Col sm="6">
                    <Card body>
                        {
                            posts.length ?
                                posts.map(post => <td key={post.id}>
                                    <CardTitle tag="h5">{post.title}</CardTitle>
                                    <CardText>{post.price.normal}</CardText>
                                    <CardText>{post.duration}</CardText>
                                    <CardText>Starting Date: {post.dates.start_date}- Ending Date:{post.dates.end_date}</CardText>
                                    <CardLink href="#">View</CardLink>
                                </td>
                                ) : null
                        }

                    </Card>
                </Col>
            </Row>
        </div>
    )
  }

}
export default CardsTable;