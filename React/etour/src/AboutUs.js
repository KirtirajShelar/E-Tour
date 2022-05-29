import React from 'react'


import "bootstrap/dist/css/bootstrap.min.css";
function AboutUs() {
    
    return (
        <div>
            
           

            <div className="row">
                <div className="col-1">
            </div>
                <div className="col-10 mt-3">
                <h1>Daily Destination</h1>
                <h5>Vision</h5>
                <i>"Daily Destination-The World Class Travel Company, Spreading Smiles and Happiness..."</i><br/><br/>
                <h5>Mission</h5>
                <i> "We are passionately committed to Total Quality Travel, with continual delivery of value added services. We uphold the highest ethical standards and believe in creating new benchmarks in the industry."</i><br/><br/>
                <h5>Why Daily Destination?</h5>
                <i>We provide more than 50 group tour products for Europe, almost 50 products for South East Asia, exclusive special tours for ladies, students, senior citizens, and trips to exotic destinations for newlyweds. Besides, we follow a continuous
                research for new products, themes and a range of travel upgradations that helps us serve the best to our guests. Whether it's a corporate tour, romantic delight, adventurous junkies or just a Chota Break , we have ample of tour choices to
                suit the most of your taste, requirement and budget. So Hurry up and book a Holiday with Daily Destination!</i><br/><br/>
            </div>
                <div className="col-1">
                </div>
            </div>

            <p className="h3 text-center">Our team</p>
        <div className="row m-4 ">
        <div className="col-sm-1 "></div>
        <div className="col-sm-3 ">
            <div className="card " style={{width: "18rem"}}>
                <img className="card-img-top " src="Abhijeet-imresizer (1).jpg " alt="Card image cap " style={{width: "100%", height: "100%"}}/>
                <div className=" card-body ">
                    <h5 className="card-title ">Abhijeet Deokar</h5>
                    <p className="card-text "><i>Owner</i></p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 ">
            <div className="card " style={{width: "18rem"}}>
                <img className="card-img-top " src="Jaydeep.jpeg" alt="Card image cap " style={{width: "100%", height: "100%"}}/>
                <div className="card-body ">
                    <h5 className="card-title ">Jaydeep Patil</h5>
                    <p className="card-text "><i>Owner</i></p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 ">
            <div className="card " style={{width: "18rem"}}>
                <img className="card-img-top " src="Kirtiraj.jpg" alt="Card image cap " style={{width: "100%", height: "100%"}}/>
                <div className="card-body ">
                    <h5 className="card-title ">Kirtiraj Shelar</h5>
                    <p className="card-text "><i>Owner</i></p>
                </div>
            </div>
        </div>
    </div>
    <div className="row m-4 ">
        <div className="col-sm-1 "></div>
        <div className="col-sm-3 ">
            <div className="card " style={{width: "18rem"}}>
                <img className="card-img-top " src="yogesh.jpg " alt="Card image cap " style={{width: "100%", height: "100%"}}/>
                <div className="card-body ">
                    <h5 className="card-title ">Yogesh Patil</h5>
                    <p className="card-text "><i>Owner</i></p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 ">
            <div className="card " style={{width: "18rem"}}>
                <img className="card-img-top " src="Rushikesh.jpeg" alt="Card image cap " style={{width: "100%", height: "100%"}}/>
                <div className="card-body ">
                    <h5 className="card-title ">Rushikesh Ghorpade</h5>
                    <p className="card-text "><i>Owner</i></p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 ">
            <div className="card " style={{width: "18rem"}}>
                <img className="card-img-top " src="sagar.jpg " alt="Card image cap " style={{width: "100%", height: "100%"}}/>
                <div className="card-body ">
                    <h5 className="card-title ">Sagar Chavan</h5>
                    <p className="card-text "><i>Owner</i></p>
                </div>
            </div>
        </div>
    </div>

    <a name="contactus"></a>
    <div className="row">
        <div className="col-sm-1"></div>

        <div className="col-sm-5">
            <h3>Contact Us</h3>
            <h5>Corporate Office</h5>
            Cyber One, 18th Floor, opp CISCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai 400703<br/><br/>
            <h5>Call us</h5>
            +91-9822453391, 91-9518910454<br/><br/>
            <h5>Email us</h5>
            <a className="nav-link " href="mailto:dailydestination@gmail.com ">thatsdailydestination@gmail.com</a><br/><br/>
        </div>

            <div className="col-sm-6">
            
            <div id="map-container-google-1" className="z-depth-1-half map-container mb-5" style={{height: "100px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9132841350056!2d72.99086301490101!3d19.067549887092735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6b4ac0f5b23%3A0x6af27035076ef01f!2sAwfis%20Vashi%20Navi%20Mumbai%20Cyber%20One!5e0!3m2!1sen!2sin!4v1628406139457!5m2!1sen!2sin"
                    frameBorder="0" style={{border:"0"}} ></iframe> </div>
           
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs
