import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Button, change, onSubmit } from "react-bootstrap";
import axios from 'axios';

{/* 

validate = () => {
  let isError = false;
  const errors = {
    TitleName: "",
  };
  if (this.state.TitleName.length < 5) {
    isError = true;
    errors.TitleNameError = "TitleName needs to be atleast 5 characters long";
  }
  return isError;
};

*/}

  {/*
    genika na dw to axios 

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then (x=>{
    this.setState({TitleName:x.data});

    tha to topothetisw nwta to state
*/}

export default class MyForm extends React.Component {
  state = {
    TitleName: [],
    DurationName: [],
    imageId: [],
    JohnId: [],
    YiannisId: [],
    DescriptionName: [],
    StartDate: [],
    EndDate: [],
    EarlyBird: [],
    NormalPrice: []

  }
  
  render() {
    return (
      <form>
        <Form.Row>
          <h1>Add Course</h1>
          <Form.Group controlId="TitleNameId">
            <Form.Label>Title Name</Form.Label>
            <Form.Control as="TitleName" />
          </Form.Group>
          <hr />
          <Form.Group controlId="DurationId">
            <Form.Label>Duration</Form.Label>
            <Form.Control as="Duration" />
          </Form.Group>
          <Form.Group>
            <Form.File id="imageId" label="Image for Course" />
          </Form.Group>
          <hr />
          <h1>Instructors</h1>
          <Form.Group controlId="JohnId">
            <Form.Check type="checkbox" label="John Tsevdos" />
          </Form.Group>
          <Form.Group controlId="YiannisId">
            <Form.Check type="checkbox" label="Yiannis Nikolakopoulos" />
          </Form.Group>
          <hr />
          <Form.Group controlId="DescriptionName">
            <Form.Label>Description</Form.Label>
            <Form.Control rows={3} />
          </Form.Group>
          <hr />
          <h1>Dates</h1>
          <Form.Group controlId="StartDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control type="text" placeholder="Start Date" />
          </Form.Group>
          <Form.Group controlId="EndDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control type="text" placeholder="End Date" />
          </Form.Group>
          <hr />
          <h1>Price</h1>
          <Form.Group controlId="EarlyBird">
            <Form.Label>Early Bird:</Form.Label>
            <Form.Control type="text" placeholder="0" />
          </Form.Group>
          <Form.Group controlId="NormalPrice">
            <Form.Label>Normal price:</Form.Label>
            <Form.Control type="text" placeholder="0" />
          </Form.Group>
        </Form.Row>
        <Button type="submit" onClick={e => this.onSubmit(e)} />
      </form>
    );
  }
}
