import React from 'react';
import fimage from '../img/logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Nav } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import Content from './content'
import Homepage from '../Homepage/body'

const Down = () => {
    return (

        <div>
            <Router>
                <section className="footerclass">
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ftrimage">
                                        <img src={fimage} className="footerimage" alt="footerimage" />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="contactmehead">
                                        <h3>Contact Me</h3>
                                    </div>
                                    <p id="contactcontent"><FontAwesomeIcon size="lg" icon={faLocationArrow} className="location mr-2"></FontAwesomeIcon>Kushma Municipality, Pang </p>
                                    <p id="contactcontent"><FontAwesomeIcon size="lg" icon={faPhone} className="location mr-2" ></FontAwesomeIcon>9867826013/9806715231 </p>
                                    <p id="contactcontent"><FontAwesomeIcon size="lg" icon={faEnvelope} className="location mr-2"></FontAwesomeIcon>rabinsubedi008@gmail.com </p>


                                    <div className="socailIcon ">
                                        <div className="iconborder">
                                            <Nav.Link id="footeritem" href="https://www.instagram.com/rabinsharmaa/?hl=en" > <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Nav.Link>
                                        </div>

                                        <div className="iconborder">
                                            <Nav.Link id="footeritem" href="https://twitter.com/Rabinsu90674917" > <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Nav.Link>
                                        </div>

                                        <div className="iconborder">
                                            <Nav.Link id="footeritem" href="https://www.linkedin.com/in/rabin-subedi-b43b45187/" > <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Nav.Link>
                                        </div>


                                        <div className="iconborder">
                                            <Nav.Link id="footeritem" href="https://www.instagram.com/rabinsharmaa/?hl=en" > <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Nav.Link>
                                        </div>

                                        <div className="iconborder">
                                            <Nav.Link id="footeritem" href="https://www.youtube.com/watch?v=lQguMrYKzzI&t=288s" > <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></Nav.Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="contactmehead">
                                        <h3>Location</h3>
                                    </div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224976.9268857088!2d83.81653012584624!3d28.229651028739358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1566649551480!5m2!1sen!2snp" frameborder="0" allowfullscreen="">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <Link class="nav-link" id="navbarContent" href="#featurepage" to='/contex'>Features </Link>
                    </footer>
                </section>
                <Switch>
                    <Route path="/contex" component={Content}></Route>
                 
              </Switch>
            </Router>
        </div>

    )
}

export default Down;