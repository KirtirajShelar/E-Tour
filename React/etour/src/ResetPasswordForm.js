import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import swal from 'sweetalert2';

function ResetPasswordForm() {

  const { token } = useParams();
  let history = useHistory();
  let [password, setpassword] = useState();
  let [cpassword, setcpassword] = useState();

  let passwordinput = (e) => setpassword(e.target.value);
  let cpasswordinput = (e) => setcpassword(e.target.value);

  const passwordRgx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  let regi = () => {

    const response = axios.post("http://localhost:8080/reset_password/"+token+"/"+password).then(
      
    (response) => {
        if(response.data == true){
          swal.fire("Password updated successfully!", "You can now login into your account with the new password!", "success");
        }else{
          swal.fire("Oops something went wrong!", "Password not updated.", "error");
        }
        
        setpassword("");
        setcpassword("");
      },
      (error) => {
        swal.fire("Oops something went wrong!", "Internal Error.", "error");
        console.log(error);
      }

    );
  }

  let validate = () => {

    if (password === "" || cpassword === "") {
      swal.fire("Error", "Please fill up details", "error");
    }else if (!passwordRgx.test(password)) {
       swal.fire("Invalid Password ", "Password should contain minimum 8 characcters, it must include 1 special character, 1 digit and One capital letter", "error");
       setpassword("");
       setcpassword("");

    }else if (!password.match(cpassword)) {
      swal.fire("Password doesn't Match", "", "error");
      setcpassword("");
    
    } else {
      regi();
    }
  }

  return (

    <div class="container-fluid">
      <div class="row">
        <div class="col-3 "></div>

        <div class="col-md-6 col-lg-6 p-5 border">
          <h4 class="mb-3">Create User Account</h4>

          <Form>

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
  );
}

export default ResetPasswordForm;