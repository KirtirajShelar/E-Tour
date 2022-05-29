import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer bg-dark " style={{padding:"2rem", color: "#ffffff "}}>
          
      <div className="float-right" style={{position: 'absolute', right: 10}}>
            <a  href="#">Back to top</a>
      </div>
        
      <p>
        © All rights reserved. Vita Group 15<br/>
        <Link to="/AboutUs#contactus" >· Contact Us</Link>
        <Link as={Link} to="/TC" >· Terms & Conditions</Link>
      </p>
      </div>
    </>
  );
}
export default Footer;





// import React from "react"

// const Footer = () => <footer className="page-footer bg-dark text-light font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//         <div className="row">
//             <div className="col-md-6 mt-md-0 mt-3">
//                 <h5 className="text-uppercase">India Tour</h5>
//                 <p>Travel Anywhere!!</p>
//             </div>

//             <hr className="clearfix w-100 d-md-none pb-0"/>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>

//     <div className="footer-copyright text-center py-3">&copy; All Rights Reserved to SM-VITA Group 15.
//     </div>

// </footer>

// export default Footer