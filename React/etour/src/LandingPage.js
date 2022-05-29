import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


function LandingPage() {
    return (
        <div>
            <div>
                <div id="intro-example " className="p-5 bg-image img-fluid" style={{backgroundImage: "url( 'lpBckPage.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh', position: "relative"}}>

                <div className="position-absolute bottom-0 start-0">
                        <img src="offer1.png" className="img-fluid" width="10% " alt='Indian Flag banner' height="10%"/>
                </div>
                <div className="position-absolute bottom-0 end-0">
                        <Link to={"/offerpage.html"}><img src="offer2.gif" className="img-fluid" alt='Offer banner' width="24% " height="24%"/></Link>
                </div>

                <div className="mask ">
                        <div className="text-white text-center ">
    
                        <h1 className="mt-10 ">Daily Destinations</h1>
                        <h5 className="mt-14 ">Travel Anywhere</h5>
                        
                        <Button variant="primary" Link as={Link} to={"/"}>Explore your destination</Button>{' '}
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}

export default LandingPage