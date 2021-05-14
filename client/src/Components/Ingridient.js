import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
const Ind =({ING})=>{
    return(
        <>
        <Card.Body>
            <Card.Title> <li>{`Name: ${ING.ind_name}  Quantity: ${ING.ind_quantity}  Unit: ${ING.ind_unit}`}</li>
              {/* <strong>Name:{ING.ind_name} </strong>
              <strong>Quantity:{ING.ind_quantity} </strong>
              <strong>Unit:{ING.ind_unit}</strong> */}
            </Card.Title>
          </Card.Body>
        </>
    )
}
export default Ind