import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import './TableForFront.css';
import { Link } from "react-router-dom";

function CourseTableForm() {
  const [posts, setposts] = useState([]);
 

  useEffect(() => {
      axios.get("http://localhost:3000/courses")
          .then((response) => {
              console.log(response.data)
              let range=[]
              for(let i=0;i<5;i++){
                range.push(response.data[i])
              }
              setposts(range)
          })
  }, [])

    return (
      <div>
        <h3 id='titleId'>Last five Courses</h3>
        <Table variant="dark">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Bookable</td>
              <td>Price</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.open ? '√' : null}</td>
              <td>{post.price.normal}</td>
              <td>{post.dates.start_date} to {post.dates.end_date}</td>
              <td><Link to={`CourseDetails/${post.id}`}><button className="btn btn-primary btn-sm">View</button></Link></td>
            </tr>
            )}
          </tbody>
        </Table>
        <a className="btn btn-success" href="/CourseForm" role="button">View all</a>
      </div>
    )
  }

export default CourseTableForm;

