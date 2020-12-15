import React, { Component } from 'react';
import axios from 'axios';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';



class EditCourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id:'',
          TitleName: '',
          DurationName: '',
          open:'',
          JohnId: '',
          YiannisId: '',
          DescriptionName: '',
          StartDate: '',
          EndDate: '',
          EarlyBird: '',
          NormalPrice: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }
     

      componentDidMount(id) {
        let CourseId = this.props.match.params.id;
        axios.get(`http://localhost:3000/courses/${CourseId}`)
        .then(response => {
          this.setState({
            id: response.data.id,
            TitleName: response.data.TitleName,
            DurationName: response.data.DurationName  
          }, () => {
            console.log(this.state);
          });
        }) .catch(error => {
            console.log(error)
            this.setState({ errorMsg: 'Error retreiving data' })
          })
      }



    updateCourse (newCourse) {
    axios.request({
      method:'put',
      url:`http://localhost3000/courses/${this.state.id}`,
      data: newCourse
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }
  onSubmit(e){
    const newCourse = {
      TitleName: this.refs.TitleName.value,
      DurationName: this.DurationName.value,
      
    }
    this.editMeetup(newCourse);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div >
        <br />
       <h1 style={{textAlign:'center',marginTop:30 }}>Edit Course</h1>
       <form onSubmit={this.onSubmit.bind(this)} style={{textAlign:'center',marginTop:10 }}>
          <div className="input-field">
            <label htmlFor="TitleName">Title : </label>
            <input type="text" name="TitleName" ref="TitleName" value={this.state.TitleName} onChange={this.handleInputChange} /> 
          </div>
          <div className="input-field"> 
            <label htmlFor="DurationName">Duration : </label>
            <input type="text" name="DurationName" ref="DurationName" value={this.state.DurationName} onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="DescriptionName">Description : </label>
            <input as="textarea" rows={3} name="DescriptionName" ref="DescriptionName" value={this.state.DescriptionName} onChange={this.handleInputChange} /> 
          </div>
          <div className="input-field"> 
            <label htmlFor="StartDate">Start Date: </label>
            <input type="text" name="StartDate" ref="StartDate" value={this.state.StartDate} onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="EndDate">End Date : </label>
            <input  type="text" name="EndDate" ref="EndDate" value={this.state.EndDate} onChange={this.handleInputChange} /> 
          </div>
          <div className="input-field"> 
            <label htmlFor="EarlyBird">Early Bird : </label>
            <input type="text" name="EarlyBird" ref="EarlyBird" value={this.state.EarlyBird} onChange={this.handleInputChange} />
          </div>
          <div className="input-field"> 
            <label htmlFor="NormalPrice">Normal Price : </label>
            <input type="text" name="NormalPrice" ref="NormalPrice" value={this.state.NormalPrice} onChange={this.handleInputChange} />
          </div>

          <div className="input-field">
            <label htmlFor="JohnId">Is John instructor ? </label>
            <input type="checkbox" name="JohnId" ref="JohnId" value={this.state.JohnId} onChange={this.handleInputChange} /> 
          </div>
          <div className="input-field"> 
            <label htmlFor="YiannisId">Is Yiannis instructor ? </label>
            <input type="checkbox" name="YiannisId" ref="YiannisId" value={this.state.YiannisId} onChange={this.handleInputChange} />
          </div>
          <div className="input-field"> 
            <label htmlFor="open">Bookable : </label>
            <input type="checkbox" name="open" ref="open" value={this.state.open} onChange={this.handleInputChange} />
          </div>
          <input  type="submit" value="Save" className="btn"  />
        </form>
      </div>
    )
  }
}

export default EditCourse;
