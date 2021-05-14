import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import moment from "moment";
import "./poststyle.css"
import { Avatar } from "@material-ui/core";
import Ind from './Ingridient'
const post = ({ post }) => {
   
  return (
    <>
      <Accordion>
        <Card className="container">
          <Card.Header as="h5">
              Posted By:{"  "}
            <strong>{post.name}</strong>
            {"  "}
            {moment(post.createdAt).fromNow()}
          </Card.Header>
          <Card.Img src={post.url} variant="top" className="img"/>

          <Card.Body>
            <Card.Title>
              <strong>{post.dish_name}</strong>
            </Card.Title>
          </Card.Body>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <Button type="button" className="btn btn-outline-info">See More</Button>{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <h5>
              <Card.Body>
             <h5> List of all Ingridient </h5>
                {post.list_of_ind.map((ING) => <Ind ING={ING} /> )}
              <Card.Title>
              <strong>Steps For Preparation:</strong>
            </Card.Title>
           
              <p class="lead">

                  {post. step_of_cook}
                  </p>
                  </Card.Body>
            </h5>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default post;
