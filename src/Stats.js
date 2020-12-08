import React, { Component } from 'react';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import "./Stats.css";

class MoviesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  //Αυτη ειναι μια lifecycle μεθοδος και εκτειλε την πρωτη φορα του get request
  componentDidMount() {
    axios.get('http://localhost:3000/stats')
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
    const { posts, errorMsg } = this.state

    return (
      <div>
        <h3 id='title'>Stats about company</h3>
        <Table id='students'>
          {
            posts.length ?
              posts.map(post => <td key={post.id}>
                <tr>{post.title}</tr>
                <tr>{post.amount}</tr>
              </td>
              ) : null
          }
          {errorMsg ? <div>{errorMsg}</div> : null}
        </Table>
      </div>
    )
  }

}
export default MoviesTable;

