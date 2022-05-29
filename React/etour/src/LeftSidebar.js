import React from "react";
import {  ListGroup} from "react-bootstrap";
import { Link} from "react-router-dom";

function Sidebar1() {
  return (
    <>
      <ListGroup className="sidebarlist" >
        <p>Cashback guaranteed
          
        </p>
        <p>Domestic</p>
        <Link className="list-group-item list-group-item-action"  tag="a" to="/itinerary/Stay at Shimla/53" action>Shimla</Link>
        <Link >
         
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/destination/104" action>Himachal</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/itinerary/Shirdi/28" action>Shirdi</Link>
        <p>International</p>
        <Link className="list-group-item list-group-item-action" tag="a" to="/destination/110" action>China</Link>
        <Link className="list-group-item list-group-item-action" tag="a"  to="/destination/106" action>Swizerland</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/destination/107" action>America</Link>
        <Link className="list-group-item list-group-item-action" tag="a"  to="/destination/111" action>Thailand</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/destination/112" action>Dubai</Link>
        
      </ListGroup>
      
    </>
  );
}
export default Sidebar1;
