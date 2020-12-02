import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


change = e => {
  this.props.onChange({ [e.target.name]: e.target.value });
  this.setState({
    [e.target.name]: e.target.value
  });
};

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
onSubmit=x=>{

}
export class MyForm extends React.Component {
  state={
    TitleName:"",
    DurationName:"",
    imageId:"",
    JohnId:"",
    YiannisId,
    DescriptionName:"",
    StartDate:"",
    EndDate:"",
    EarlyBird:"",
    NormalPrice:""

  }
    render() {
      return (
        <form>
          <h1>Add Course</h1>
          <TextField 
           name="TitleName"
           hintText="Title"
           floatLabelText="Title"
           value={this.state.TitleName}
           onChange={e=>this.change(e)}
           floatLabelFixed
          />
          <TextField 
           name="DurationName"
           hintText="Duration"
           floatLabelText="Duration"
           value={this.state.DurationName}
           onChange={e=>this.change(e)}
           floatLabelFixed
          />
          {/* mporw kai alliws to path gia eikona.oxi opws zitane */}
          <p>Image path:</p>
          <input type="image path"/>       
          <Form.Group controlId="imageId">
          <Form.Check type="checkbox" label="image" />
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
          <Button type="submit" onClick={e => this.onSubmit(e)}/>
        </form>
      );
    }
  }
