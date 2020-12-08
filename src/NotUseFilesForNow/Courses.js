import React from "react";
import {Card, CardText, CardBody, CardTitle,CardLink,CardImg } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const Table = ({courses}) => (
      <div >
        { courses.length && courses.map(({ id, title, imagePath, price }) => (
            <Card type="inner" key={id}>
              <CardTitle>{title}</CardTitle>  
              <CardImg component="img"image={imagePath}/>
                 <CardBody> 
                 <CardText>{price}</CardText>
                 <CardLink href="#">Edit</CardLink>
                 <CardLink href="#">Delete</CardLink>
                 </CardBody>
            </Card>
          ))}
      </div>
   
  );

export default Table;