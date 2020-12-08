import React, { useState, useEffect } from "react";
import TableList from './Courses';

const CourseList=()=>{
    const[courses,setcourses]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/courses")
        .then((res) => res.json())
        .then((data) => {
            setcourses(data);
        });
    }, []);
    return <TableList courses={courses} />;
};
export default CourseList;

