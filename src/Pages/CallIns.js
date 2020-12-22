import React, { useEffect, useState } from "react";

//instructorId => key για συνδεση με το course
const Instructors = ({ instructorId }) => {

    useEffect(() => {
        fetchInstructor();
    }, []);

    //Δηλωση μεθοδου για να φερω ολους του instructor
    const [instructors, setInstructors] = useState([]);
    const fetchInstructor = () => {
        fetch(`http://localhost:3000/instructors`)
            .then(res => res.json())
            .then(
                (result) => {
                    setInstructors(result);
                }
            )
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }

    return (

        <div >
          {
          // Chech εαν το request εγινε 
          instructors.length ?
          //κανουμε post μονο τα data απο το id που θελουμε
          instructors.map(post => 
            instructorId.indexOf(post.id) >-1 ?
               (
                <div>
                    <div className="modal-body">
                        <h3>{post.name.first} {post.name.last}</h3>  
                    </div>
                    <div className="modal-body">
                       <a href="#">{post.email}</a>{" | "}<a href="#">{post.linkedin}</a>
                    </div>
                    <div className="modal-body">
                       <h5>Date of birth: {post.dob}</h5>
                    </div>
                    <div className="modal-body">
                       <h5>Bio: {post.bio}</h5>
                    </div>      
                  </div>
               ): null               
            ) : null
        }
        </div>
    )
}

export default Instructors;