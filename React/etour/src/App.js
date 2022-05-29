import logo from './logo.svg';
import './App.css';
import Maarquee from "./marquee.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "./Footer";
import Itinerary from "./Itinerary";
import SearchFetch from "./SearchFetch";
import CardsFetch from "./CardsFetch";
import Sidebar from "./sidebar";
import { Row, Col} from "react-bootstrap";
import AboutUs from "./AboutUs";
import TC from "./TC";
import Feedback from "./FeedbackPage";
import RegisterUser from "./RegisterUser";
import React, { useEffect }  from 'react'
import { Container } from 'react-bootstrap'
import Booking from "./BookingTrial";
import NavbarComponent from './NavbarComponent';
import Payment from './Payment';
import Invoice from './Invoice';
import Download from './Download';
import ResetPasswordForm from './ResetPasswordForm';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar1 from './LeftSidebar';
import LandingPage from './LandingPage';
import Gallery from './Gallery';
import { useLocation } from "react-dom";
function App() {
  let user = JSON.parse(localStorage.getItem('user-info'));

  /* const usePathname = () => {
    const location = useLocation();
    console.log( location.pathnam)
  } */
  /* const location = useLocation();
   
  
      useEffect(() => {
      console.log(location.pathname);
    }, []); */
  return (
    <>
      <Router>
  
        {/* location.pathname === "/payment/:destid/:destinationName/:cost/:customers/:persons/:adults/:children/:destStartDate/:duration/:destEndDate" ? null: */((user == undefined) ? <NavbarComponent name="true" /> : <NavbarComponent />)}
        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/Feedback">
            <Feedback />
          </Route>
          <Route exact path="/LandingPage">
        <LandingPage />
          </Route>
          <Route exact path="/TC">
            <TC />
          </Route>
          <Route exact path="/RegisterUser">
            <RegisterUser />
          </Route>
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
          <Route exact path="/reset_password/:token"
            render={(props) => (
              <ResetPasswordForm {...props} key={props.match.params.token} />
            )}>
          </Route>
          <Route exact path="/AboutUs#contactus">
            <AboutUs />
          </Route>
          <Route exact path="/Download">
            <Download />
          </Route>
          <Route exact path="/booking/:destid/:destinationName"
            render={(props) => (
              <Booking {...props} key={props.match.params.destid} />
            )}>

          </Route>
          <Route exact path="/payment/:destid/:destinationName/:cost/:customers/:persons/:adults/:children/:destStartDate/:duration/:destEndDate"
            render={(props) => (
              <Payment {...props} key={props.match.params.destid} />
            )}>
          </Route>
          <Route exact path="/invoice/:destid/:destinationName/:cost/:customers/:persons/:adults/:children/:destStartDate/:duration/:destEndDate/:bkid"
            render={(props) => (
              <Invoice {...props} key={props.match.params.destid} />
            )}>
          </Route>

          <Container fluid="100%">
            <Maarquee />
            <Row>
              <Col xs={4} sm={4} md={2} lg={2} >
                <Sidebar1 />
              </Col>

              <Col xs={8} lg={8} md={10} >

                <fieldset className="border p-2  ">

                  <Route exact path="/">
                    <CardsFetch name="*" />
                  </Route>
                  <Route
                    path="/destination/:subcatID"
                    render={(props) => (
                      <CardsFetch {...props} key={props.match.params.subcatID} />
                    )}
                  ></Route>

                  <Route
                    path="/itinerary/:destinationName/:destid"
                    render={(props) => (
                      <Itinerary {...props} key={props.match.params.destid} />
                    )}
                  ></Route>

                  <Route path="/searchbycost/:count/:count1">
                    <SearchFetch name="cost" />
                  </Route>
                  <Route path="/searchbyDuration/:count/:count1">
                    <SearchFetch name="duration" />
                  </Route>
                  <Route path="/searchbyDate/:count/:count1">
                    <SearchFetch name="date" />
                  </Route>
                </fieldset>
              </Col>

              <Col xs={2} lg={2} className="sidebar"  style={{ backgroundColor: "#f6f6f6" }}>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
