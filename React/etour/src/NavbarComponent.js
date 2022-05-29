import React, { useState, useEffect } from 'react'
import { Modal, Button, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router'
import swal from 'sweetalert2'

import "bootstrap/dist/css/bootstrap.min.css";



function NavbarComponent() {


    var history = useHistory();
    var history1 = useHistory();
    var [count, setCount] = useState("")
    var [count1, setCount1] = useState("")
    const [srcShow, setSearchShow] = useState(false);
    const handleClose = (e) => {
        setCount("");
        setCount1("")
        setSearchShow(false);
    }
    let user = JSON.parse(localStorage.getItem('user-info'));
    const [lgnShow, setLoginShow] = useState(false);
    const handleLClose = () => setLoginShow(false);


    let [emailid, setemailid] = useState();
    let [password, setpassword] = useState();

    let emailidinput = (e) => setemailid(e.target.value);
    let passwordinput = (e) => setpassword(e.target.value);


    let [emailidforgot, setemailidforgot] = useState();
    let emailidforgotinput = (e) => setemailidforgot(e.target.value);

    const ForgotPassword_Validate = async () => {
        console.log(emailidforgot)
        const responce = await fetch(`http://localhost:8080/forgot_password/${emailidforgot}`)

        const data23 = await responce.json();

        if (data23 == true) {
            swal.fire("Email sent!", "Check your email and reset the password!", "success");
            setemailidforgot("");
        }
        else {
            swal.fire("Error", "Please enter valid username", "error");
            setemailidforgot("");
        }

    }
    const logout = () => {
        localStorage.clear();
        handleClick();
        history.push("/")
    };

    const { name } = useParams();
    useEffect(() => {
        handleClick();
    }, [name]);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);




    const [showforgot, setShowforgot] = useState(false);

    const handleCloseforgot = () => setShowforgot(false);
    const handleShowforgot = () => setShowforgot(true);

    const Validate = async () => {

        console.log(emailid)
        console.log(password)
        const responce = await fetch(`http://localhost:8080/UserDetails/login/${emailid}/${password}`)
        const data = await responce.json();

        if (data == true) {

            let item = (emailid)
            swal.fire("Login Successful", "You are now ready to book your Destination!", "success");
            localStorage.setItem("user-info", JSON.stringify(item))
            handleLClose()
            history.push("/")
            setemailid("");
            setpassword("");
        }
        else {
            swal.fire("Error", "Please enter valid username and password", "error");
        }

    }
    const signup = () => {
        handleLClose()
        history.push("/RegisterUser")
    }
    /* 
        const Forward2 = (e) => {
         
            console.log(e.target.name)
            if (count === "" || count1 === "") {
                swal.fire("Error", "Please fill up details", "error");
                setCount("");
                setCount1("")
            }
            else {
                if (e.target.name === "cost") {
                    console.log(e.target.name)
                    console.log(count,count1)
                    history.push(`/searchbycost/${count}/${count1}`);
                    setCount("");
                    setCount1("")
                    handleClose()
                }
                else if (e.target.name === "date") {
                    history.push(`/searchbyDate/${count}/${count1}`);
                    setCount("");
                    setCount1("")
                    handleClose()
                }
                else {
                    history.push(`/searchbyDuration/${count}/${count1}`);
                    setCount("");
                    setCount1("")
                    handleClose()
                }
            }
        } */


    return (

        <>
            <div>
                <div className="position-relative position-relative-example">
                    <img src='headerImage.jpg' className='img-fluid' onError={(e) => e.target.style.display='none' }style={{ position: "relative" }}  width="100% " />

                    <div className="position-absolute top-0 start-0">
                        <img src="indianflag.gif" className="img-fluid" onError={(e) => e.target.style.display='none' } width="30% " height="30%" />
                    </div>
                  
                </div>
            </div>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/LandingPage">E-Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="justify-content-center">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>

                            {/* <NavDropdown title="Tours" id="collasible-nav-dropdown">
                                <NavDropdown.Item to={"/action/3.1"}>Tour1</NavDropdown.Item>
                                <NavDropdown.Item to={"/action/3.2"}>Tour2</NavDropdown.Item>
                                <NavDropdown.Item to={"/action/3.3"}>Tour3</NavDropdown.Item>
                            </NavDropdown> */}


                            <Nav.Link onClick={() => setSearchShow(true)}>Search</Nav.Link>
                            <div className="SearchModal">
                                <Link to="/">
                                    <Modal size="lg" show={srcShow} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Search Destinations</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>

                                            Custom Date
                                            <div >

                                                <table cellPadding="5"><tr>
                                                <td>    From: <input type="date" name="sDate" className='form-control' autocomplete="off" onChange={(e) => { setCount(count = e.target.value); }} /></td>
                                                <td> To: <input type="date" name="eDate" className='form-control' autocomplete="off" onChange={(e) => { setCount1(count1 = e.target.value); }} /></td>
                                                <td>   <Link to={`/searchbyDate/${count}/${count1}`} >
                                                        <button className="btn btn-primary"name="date" variant="primary" onClick={handleClose}>Search</button>
                                                    </Link></td>
                                                    </tr> </table></div> <br />

                                            Price Range
                                            <div>    <table cellPadding="5" vertical-align=" center"><tr>
                                                
                                                <td>    From: <input type="number" name="cost1" className='form-control' autocomplete="off" onChange={(e) => { setCount(count = e.target.value); }} /></td>
                                                <td>      To: <input type="number" name="cost2" className='form-control' autocomplete="off" onChange={(e) => { setCount1(count1 = e.target.value); }} /></td>
                                                <td>     <Link to={`/searchbycost/${count}/${count1}`} >
                                                    <button className="btn btn-primary "name="cost" variant="primary" onClick={handleClose}

                                                    >Search</button></Link></td> </tr> </table>
                                            </div> <br />

                                            Duration of Days
                                            <div >    <table cellPadding="5"><tr>
                                               
                                                <td>    Min: <input type="number" name="cost1"className='form-control' autocomplete="off" onChange={(e) => { setCount(count = e.target.value); }} /></td>
                                                <td>    To Max: <input type="number" name="cost2" className='form-control'autocomplete="off" onChange={(e) => { setCount1(count1 = e.target.value); }} /></td>
                                                <td>    <Link to={`/searchbyDuration/${count}/${count1}`}>
                                                    <button className="btn btn-primary"name="duration" variant="primary" onClick={handleClose}

                                                    >Search</button></Link> </td> </tr> </table>
                                            </div>

                                        </Modal.Body>

                                    </Modal></Link>
                            </div>
                            {(user != undefined) ?

                                (
                                    <Nav.Link as={Link} to="/Download" >Download</Nav.Link>
                                )
                                : null}
                            <Nav.Link as={Link} to="/TC">T & C</Nav.Link>
                            <Nav.Link as={Link} to="/Feedback">Feedback</Nav.Link>

                            <Nav.Link  href="https://www.youtube.com/user/WORLDOFKESARI" target="_blank" >Videos</Nav.Link>
                            <Nav.Link as={Link} to="/Gallery">Gallery</Nav.Link>

                            <Nav.Link href="mailto:dailydestination@gmail.com">Email Us</Nav.Link>
                            <Nav.Link as={Link} to="/AboutUs#contactus">Contact Us</Nav.Link>





                            {localStorage.getItem('user-info') ? null : (<>
                                <Nav.Link to="/login" data-bs-toggle="modal" href="#exampleModalToggle"/* onClick={() => setLoginShow(true)} */>Login/Register</Nav.Link>

                                <div className="LoginModal">

                                    {/*   <Modal show={lgnShow} onHide={handleLClose} >

                                        <Modal.Header closeButton>
                                            <Modal.Title>Login</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <label for="email" className="form-label">Email </label>
                                            <input type="email" className="form-control" placeholder="you@example.com" onChange={emailidinput} value={emailid} />

                                            <label for="password" className="form-label">Password </label>
                                            <input type="password" className="form-control" placeholder="password" onChange={passwordinput} value={password} />

                                            <p  onClick={handleShowforgot}  ><b>Forgot password?</b></p>

                                            <Modal show={showforgot} onHide={handleCloseforgot}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseforgot}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleCloseforgot}>
                                                Save Changes
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        </Modal.Body>
                                        <Button variant="primary" onClick={Validate}>login</Button>

                                        <Modal.Footer>




                                            New to India Tour?
                                            <Button variant="primary" Link as={Link} to="/RegisterUser" onClick={handleLClose}>Signup</Button>
                                        </Modal.Footer>

                                    </Modal> */}
                                    {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
                                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalToggleLabel">Login</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label for="email" className="form-label">Email </label>
                                                    <input type="email" className="form-control" placeholder="you@example.com" onChange={emailidinput} value={emailid} />

                                                    <label for="password" className="form-label">Password </label>
                                                    <input type="password" className="form-control" placeholder="password" onChange={passwordinput} value={password} />
                                                    <a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" ><b>Forgot password?</b></a>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-primary " style={{ alignItems: "center" }} onClick={Validate} data-bs-dismiss="modal" aria-label="Close">Login</button>
                                                </div>
                                                <div className="modal-footer">
                                                    New to India Tour?
                                                    <Button variant="primary" data-bs-dismiss="modal" aria-label="Close" onClick={signup}>Signup</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalToggleLabel2">Forgot password</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label for="email" className="form-label">Email </label>
                                                    <input type="email" className="form-control" placeholder="you@example.com" onChange={emailidforgotinput} value={emailidforgot} />

                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-primary" onClick={ForgotPassword_Validate} data-bs-dismiss="modal" aria-label="Close">send mail</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
















                                </div></>)}
                            {(user != undefined) ?

                                (

                                    <NavDropdown title={user} id="collasible-nav-dropdown">
                                        <NavDropdown.Item activeClassName="active" className="new-link" onClick={logout}>Logout
                                        </NavDropdown.Item>

                                    </NavDropdown>


                                )
                                : null}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent
