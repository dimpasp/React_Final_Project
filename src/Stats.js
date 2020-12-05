import React, { Component } from 'react';
import axios from 'axios'
import { Table } from 'react-bootstrap';



export default class MoviesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }
  }

  //Δημιουργια asynchronous function απο την οποια περνουμε data μεσω του axios. 
  //Mε τγν χρηση του await μολις παρουμε απαντηση αλλαζουμε το state του Loading
  //και δινουμε τα δεδομενα στον χρηστη μεσω μιας lifecycle method.
  async getUsersData() {
    const url = await axios.get('http://localhost:3000/stats');
    console.log(url.data)
    this.setState({ loading: false, users: url.data })
  }
  componentDidMount() {
    this.getUsersData()
  }

  //Δημιουργουμε εναν πινακα για τα αντικειμενα.
  render() {
    const columns = [{
      Header: 'id',
      accessor: 'id',
    }
      , {
      Header: 'title',
      accessor: 'title',
    },
    {
      Header: 'amount',
      accessor: 'amount',
    }
    ]


    return (
      <Table
        data={this.state.users}
        columns={columns}
      />
    )
  }

}

