import React, { Component } from 'react';
import contactimage from '../img/contact.png'
import { Form, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            myname: "",
            message: "",
            nameError: "",
            messageError: ""
        }
           
    }
    Valid() {
        if (!this.state.name.includes("@")  && ! this.state.myname && this.state.message.length < 50) {
            this.setState({ nameError: "Required Email address", mynameError:"Required Name", messageError: "Message length should be more than 50 character" })
        }

        else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Email" })
        }
        else if (!this.state.myname.includes) {
            this.setState({ nameError: " Name Shoudl be" })
        }
        else if (this.state.message.length < 6) {
            this.setState({ messageError: "message length should be more than 50 character" })
        }
        else {
            return true;
        }
    }
    submit() {

     
        this.setState(
            { nameError: "", messageError: "", mynameError: "" }
        )
        if (this.Valid()) {
            console.warn(this.state)
            alert("Thank you for conact")


            console.log(this.state)
            fetch('url', {
                method: 'Post',
                body: JSON.stringify(
                    this.state
                ),
                headers: {
                    'Accept': 'application/json',
                    'Contetnt-Type':'application/json',
                }
            }).then(function (response) {
                response.json().then(function (resp) {
                    console.log(resp)
                })
            })
        }
    }
    render() {
        return (
            <div>
                <section className="contactsection" id="cntc">
                    <div className="container">
                        <div className="serviceheader">
                            <h1 className="text-center" id="servicehead"> Contact Me</h1>
                            <div className="underlinecontact"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={contactimage} className="contactmesideimage" alt="contactmesideimage" data-aos="fade-left" />
                            </div>

                        
                            <div className="col-md-6">
                               
                                
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" onChange={(event) => { this.setState({ myname: event.target.value }) }} placeholder="Enter your name" />
                                        <p  style={{ color: "red" }}>{this.state.mynameError}</p>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Enter your email" />
                                        <p  style={{ color: "red" }}>{this.state.nameError}</p>
                  
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" onChange={(event) => { this.setState({ message: event.target.value }) }} rows={3} />
                                        <p  style={{ color: "red" }}>{this.state.messageError}</p>
                  
                                    </Form.Group>

                                    <button onClick={()=>this.submit()} className="btn btn-primary" ><FontAwesomeIcon onClick={()=>this.submit()} className="btn btn-primary"  id="paperplane" className="mr-2" icon={faPaperPlane}></FontAwesomeIcon>Send</button>
            
                              
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;