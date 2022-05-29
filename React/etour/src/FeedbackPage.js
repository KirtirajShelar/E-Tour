import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import swal from 'sweetalert2';


class FeedbackPage extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
          Message: ''
        };
      }

    onCreateFeedback=()=>{
        let feedback={
              "name":this.refs.name.value,
              "phone":this.refs.phone.value,
              "email":this.refs.email.value,
              "feedback":this.refs.feedback.value
            };
           let demo= JSON.stringify(feedback);
            console.log(JSON.parse(demo));
            fetch("http://localhost:8080/user/addfeedback",{
          method: 'POST',
          headers:{'Content-type':'application/json'},
            body: demo
        }).then(r=>{r.json()}).then(res=>{
            swal.fire("Successful","New Feedback is Submitted Successfully", "success");
            
            this.refs.name.value=""
            this.refs.phone.value=""
            this.refs.email.value=""
            this.refs.feedback.value=""
        });
        }

    render(){
    return (
        <div>
           

            <div class="container-fluid">
            <div class="row">
                <div class="col-3 "></div>
           
            <div class="col-md-6 col-lg-6 p-5 border">
            <h4 class="mb-3">Feedback Form</h4>
            
            <Form>
                <Form.Label>Full name*</Form.Label>
                <Form.Control type="text" placeholder="Enter name" ref="name" required/>

                <Form.Label className="mt-3">Contact number*</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number" ref="phone" required/>
                
                <Form.Group className="mt-3" controlId="formBasicEmail">
                <Form.Label >Email address*</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref="email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

{/*                 <h4 class="mt-2">Feedback Type</h4>
                <input type="radio" value="Male" name="gender" /> Comments <br/>
                
                <input type="radio" value="Female" name="gender" /> Suggestions <br/>
                
                <input type="radio" value="Other" name="gender" /> Questions <br/><br/>
                 */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Describe Your Feedback*</Form.Label>
                <Form.Control as="textarea" rows={3} ref="feedback" required/>
                </Form.Group>

                {/* <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload file (Optional)</Form.Label><br/>
                <Form.Control type="file" multiple />
                </Form.Group> */}

                <Button variant="primary"  onClick={this.onCreateFeedback}>
                Submit
                </Button>
            </Form>

            </div>
                
                <div class="col-3"></div>
        </div>
        </div>


    
        </div>
    )}
}

export default FeedbackPage
