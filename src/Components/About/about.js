import React from 'react';
import aboutimage from '../img/ee.jpg'
const About = () => {
    return (
        <div>
            <section className="Aboutmesection" id="abt">
                <div className="container">
                <div className="serviceheader">
                    <h1 className="text-center" id="servicehead"> About Me</h1>
                    <div className="underlineaboutme text-center"></div>
                </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aboutmeimage">
                                <img src={aboutimage} id="abtimg"  alt="aboutmeimage"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aboutmyself">
                                <div className="card mediacard" id="aboutcard"  data-aos="fade-right">
                                    <p className="aboutmyselfparagraph">
                                        I am a dedicated and self-learning student who focuses on acquiring goal by applying my knowledge.
                                        I am always taking opportunities to acquire new knowledge. 
                                        I have a natural ability to learn new technological ideas. 
                                        I am passionate about technical related studies and earning new experiences.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,80C672,43,768,21,864,21.3C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            </section>
        </div>
    )
}
export default About;