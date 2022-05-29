import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert2';

const RegisterUser = () => {

    let history = useHistory();
    let [username, setusername] = useState();
    let [emailid, setemailid] = useState();
    let [mobileno, setmobileno] = useState();
    let [password, setpassword] = useState();
    let [cpassword, setcpassword] = useState();
    let [firstname, setfirstname] = useState();
    let [lastname, setlastname] = useState();


    let usernameinput = (e) => setusername(e.target.value);
    let emailidinput = (e) => setemailid(e.target.value);
    let mobilenoinput = (e) => setmobileno(e.target.value);
    let passwordinput = (e) => setpassword(e.target.value);
    let cpasswordinput = (e) => setcpassword(e.target.value);
    let firstnameinput = (e) => setfirstname(e.target.value);
    let Lastnameinput = (e) => setlastname(e.target.value);

    const nameRgx = /^[a-zA-Z\s]+$/;
    const firstRgx = /^[a-zA-Z\s]+$/;
    const lastRgx = /^[a-zA-Z\s]+$/;
    const emailRgx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mobilenoRgx = /^[789][0-9]{9}$/;
    const passwordRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
   
    let regi = () => {

        let user = {
         
            userFName: firstname,
            userLName: lastname,
            userEmail: emailid,
            userPassword: password,
            userMobile: mobileno,
        };
    
        axios.post("http://localhost:8080/user/add", user).then(
            (response) => {
                swal.fire("User Registered", "You are now ready to get your destination!");
                history.push(`/`)
         

                setemailid("");
                setmobileno("");
                setpassword("");
                setcpassword("");
                setfirstname("")
                setlastname("");

            },
            (error) => {
                swal.fire("Error", "User already exists with that email","error");
                console.log(error);
              
            }

        )
    }
    let validate = () => {

        if (emailid === "" || mobileno === "" || firstname === "" || lastname === "" || password === "" || cpassword === "") {
            swal.fire("Error", "Please fill up details", "error");

        } else if (!emailRgx.test(emailid)) {
            swal.fire("Invalid Email Id", "Please Enter valid email", "error");
            setemailid("");
        } else if (!mobilenoRgx.test(mobileno)) {
            swal.fire("Invalid MObileNO", "Please Enter valid mobileno", "error");
            setmobileno("");
        } else if (!firstRgx.test(firstname)) {
            swal.fire("Error", "Please fill up details", "error");
            setfirstname("");
        }
        else if (!lastRgx.test(lastname)) {
            swal.fire("Error", "Please fill up details", "error");
            setlastname("");
        }
        else if (!passwordRgx.test(password)) {
            swal.fire("Invalid Password ", "Password should contain minimum 8 characcters, it must include 1 special character, 1 digit and One capital letter", "error");
            setpassword("");
            setcpassword("");
        } else if (!password.match(cpassword)) {
            swal.fire("Password doesn't Match", "", "error");
            setcpassword("");
        } else {

            regi();


        }
    };




    return (
        <div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 "></div>

                    <div class="col-md-6 col-lg-6 p-5 border">
                        <h4 class="mb-3">Create User Account</h4>

                        <Form>
                            

                            <Form.Label>FirstName*</Form.Label>
                            <Form.Control type="text" name="firstName" id="firstName" onChange={firstnameinput} value={firstname} />

                            <Form.Label>LastName*</Form.Label>
                            <Form.Control type="text" name="LastName" id="LastName" onChange={Lastnameinput} value={lastname} />

                            <Form.Label className="mt-3">Contact number*</Form.Label>
                            <Form.Control type="tel" name="MobileNo" id="MobileNo" onChange={mobilenoinput} value={mobileno} />


                            <Form.Label>Enter EmailId*</Form.Label>
                            <Form.Control type="email" name="EmailId" id="EmailId" onChange={emailidinput} value={emailid} />


                            <Form.Label>Enter  Password*</Form.Label>
                            <Form.Control type="password" name="Password" id="Password" onChange={passwordinput} value={password} />


                            <Form.Label>Confirm Password*</Form.Label>
                            <Form.Control type="password" name="CPassword" id="CPassword" onChange={cpasswordinput} value={cpassword} />


                            <Button type="button" onClick={validate} value="Register" >SignUp</Button>
                        </Form>

                    </div>

                    <div class="col-3"></div>
                </div>
            </div>



        </div>
    );
}

export default RegisterUser;