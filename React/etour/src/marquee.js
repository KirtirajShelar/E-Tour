import Marquee from "react-fast-marquee";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Maarquee extends Component {
  render() {
    return (
      <>
          <Row>
            <Marquee className="Marquee" pauseOnHover speed="50">
              <Link to={"/destination/103"} style={{ textDecoration: 'none' }}> Kashmir is now Open, Check it out!!</Link>{" "}
              &middot;.
              <Link to="/destination/104" style={{ textDecoration: 'none' }}>
                
               the beautiful Himanchal
              </Link>
              &middot;
              <Link to="/destination/108" style={{ textDecoration: 'none' }}> Best of Bali </Link> &middot;
              <Link to="/destination/105" style={{ textDecoration: 'none' }}> Explore Europe </Link> &middot;
              <a> Book Now and visit later</a> &middot;
            </Marquee>
          </Row>
      </>
    );
  }
}
export default Maarquee;
