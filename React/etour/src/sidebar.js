import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (<>

    <ListGroup className="sidebarlist">
      <>Cashback guaranteed

      </>
      <p>Domestic</p>
      <Link tag="a" to="/itinerary/Stay at Shimla/53" action>Shimla</Link>
      <Link >

      </Link>
      <Link tag="a" to="/destination/104" action>Himachal</Link>
      <Link tag="a" to="/destination/100" action>Kerala</Link>
      <p>International</p>
      <Link tag="a" to="/destination/110" action>China</Link>
      <Link tag="a" to="/destination/106" action>Swizerland</Link>
      <Link tag="a" to="/destination/107" action>America</Link>
      <Link tag="a" to="/destination/111" action>Thailand</Link>
      <Link tag="a" to="/destination/112" action>Dubai</Link>

    </ListGroup>

  </>);
}
export default Sidebar;