import React from "react";
import { Card } from "react-bootstrap";
import {  useHistory } from "react-router-dom";



const Cards = (props) => {
  let history = useHistory();

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row my-2">
              {props.cards.map((curElem,index) => {
                const {
                  destid,
                  Subdestid,
                  subcatID,
                  destinationName,
                  DestImg,
                  flag,
                } = curElem;
                console.log(subcatID);
                
                return (
                  <>
                    <div className="col-12  col-md-6  col-lg-4  col-xl-3 my-4  ">
                  
                      <Card
                        style={{ width: "12rem" }}
                        key={index}
                        className="box zoom"
                      >
                        
                        <Card.Img
                          className="img-fliud "
                          variant="top"
                          src={`/${DestImg}`}
                          width="100%"
                          value={destid}
                          
                          onClick={() =>
                            history.push(flag==="N"? ("/destination/" + subcatID):("/itinerary/"+destinationName +"/" +destid))
                          }
                        />
                        
                        <Card.Body>
                          <Card.Title >{destinationName}  </Card.Title>
                          <Card.Text></Card.Text>
                      
                        </Card.Body>
                      </Card>
                    </div>
                  </>
                );
})}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
