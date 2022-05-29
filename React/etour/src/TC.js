import React from 'react'
import Footer from './Footer'
import NavbarComponent from './NavbarComponent'

function TC() {
    return (
     

        <div class="row">
        <div class="col-1 "></div>
        
        <div class="col-md-10 col-lg-10 p-5 border">
            <h2 style={{color:"blue"}}> Read the following carefully </h2>

            <p> Welcome to <b style={{color:"blue"}}>Daily Destination</b>. To make this Site informative, we request all our Guests visiting our Site to adhere to our terms and conditions (“Terms and Conditions”). By accessing the Site, you (“You”) indicate
                your acknowledgment and acceptance of these Terms and Conditions. You are advised to kindly check them periodically for changes from time to time. Your continued use of www.DailyDestination.in following the posting of changes to these
                Terms and Conditions will mean that You accept those changes. </p>

            <p>While we will make every effort to maintain up-to-date and accurate information on the Site, visitors should be aware that Daily Destination accepts no responsibility for the accuracy or completeness of any material contained on the Site and
                recommends that visitors exercise their own care, discretion and judgment with respect to its use.</p>

            <a name="privacypolicy"></a>
            <h3 style={{color:"blue"}}> Privacy Policy </h3>
            <p>When You visit the Site, in certain parts of the Site, we may ask You to provide us with personal information so that we can provide You with information You request. You are under no obligation to provide us with this information, but without
                the said information, we may not be able to provide You the information You have requested. The Site may also include certain features that allow You to communicate with us by electronic means such as email. You are responsible if You
                choose to use these communication features to provide personal identification information to us (such as by including Your name and/or address in the body of an e-mail message). When You provide any personal identification information
                to us, You affirm that You are knowingly and voluntarily providing us the information. We may respond to the electronic communication messages You send us. The use of cookies and other information is used to optimize the viewing experience,
                troubleshoot any problems and better serve content.</p>

            <p>We work to ensure that the personal identification information You do intentionally provide us remains private. We will not sell, rent, or trade the personal identification information You provide to anyone outside Daily Destination, unless
                we are required to do so by law. Please be aware, however, that it may be possible for others to read messages that You send over the Internet, you are therefore advised not to send any such information by electronic communication that
                You would like to keep confidential.</p>

            <h3 style={{color:"blue"}}>Intellectual Property Notice And Restrictions On Use Of Materials</h3>
            <p>This Site is owned and operated by Daily Destination Private Limited and features trademarks, copyrights and other intellectual property which are the property of Daily Destination Private Limited, its divisions, affiliates or subsidiaries.
                You agree that You will not display the Daily Destination Marks or other third party trademarks, or use the Daily Destination Marks or other third party trademarks in any manner, without the prior written permission of Daily Destination
                or the respective owners of other third party marks.</p>

            <p>This Site may also contain trademarks, copyrights and other intellectual property rights of third parties, including our clients. All such rights are proprietary to their respective owners. Users are prohibited by law and these conditions
                from modifying, copying, distributing, transmitting, displaying, publishing, selling, licensing, creating derivative works or using any content on this Site for commercial or public purposes in any way or in any manner or medium. Unauthorized
                use of this web site and system including but not limited to unauthorized entry, misuse of passwords, or misuse of any information posted on this site is strictly prohibited and would attract both penal and punitive action.</p>

            <p>Except as specifically permitted in accordance with the Terms and Conditions governing use of this Site, any use of Daily Destinations’s or other third party trademarks or trade names found on the Site is strictly prohibited without the express
                written permission of their respective owners.</p>

            <h3 style={{color:"blue"}}>Third Party Advertisements</h3>
            <p>Please note that third parties advertise on our Site. We do not share any of your personal Information with these third party advertisers unless you give us permission, in writing to do so. These advertisers may seek to use cookies and pixel
                tags to track Session Data about the ads you have seen and types of things in which you appear interested. These advertisers may also use combined information about your visits to our Site and other sites in order to provide advertisements
                about related goods and services that may be of interest to you.</p>
            <p>When you click on one of these advertisers' links, you are leaving our Site and entering another site. We are not responsible for such third party's sites. You should carefully review the privacy statements of any other site you visit, because
                those privacy statements will apply to your visit to that site, and may be very different from our policy.</p>

            <h3 style={{color:"blue"}}>Logos, Concepts, Ideas</h3>
            <p>We exclusively develop our logos, concepts and ideas for use in advertising, promotion, public relations and whatever else is appropriate to promote the products and services of our guests. You are not supposed to misuse, steal any of our
                creations, logos, and also not use any of our creations appearing on the Site for any purposes, otherwise the act may attract penal action.</p>

            <h3 style={{color:"blue"}}>Changes To This Privacy Policy</h3>
            <p>Please note that this privacy policy may change from time to time. If we make material changes that will affect personal information we have already collected from You, we will make reasonable efforts to notify You of the changes and to give
                You the opportunity to amend or cancel your registration.</p>

            <div class="col-12 d-flex justify-content-center m-4 ">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                    <label class="form-check-label" for="flexCheckChecked">
                            I accept the Terms and Conditions
                    </label>
                </div>
            </div>

            {/* <div class="col-12 d-flex justify-content-center mt-2 ">
                <button class="btn btn-dark ml-1 ">Continue</button>
            </div> */}

        </div>

        <div class="col-1"></div>
    </div>

   
     
    )
}

export default TC
