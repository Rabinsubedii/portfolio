import React from 'react'
import skillimage from '../img/skl.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
const Skill = () => {

    return (
        <div>
            <section className="skillsection" id="skl">
                <div className="skillheading">
                    <h1 className="text-center" id="skillhead"> Skill</h1>
                    <div className="underline text-center"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skillimage">
                                <img src={skillimage} alt="skillimage" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="progressBar" data-aos="fade-right">
                                <div className="htmlbar">
                                    <h5>HTML</h5>
                                    <ProgressBar animated now={85}  />
                                </div>

                                <div className="photoshopbar">
                                    <h5>Photoshop</h5>
                                    <ProgressBar animated now={35} />
                                </div>

                                <div className="cssbar">
                                    <h5>CSS</h5>
                                    <ProgressBar animated now={75} />
                                </div>

                                <div className="bsbar">
                                    <h5>Bootstrap</h5>
                                    <ProgressBar animated now={70} />
                                </div>

                                <div className="jsbar">
                                    <h5>JS</h5>
                                    <ProgressBar animated now={55} />
                                </div>

                                <div className="mediabar">
                                    <h5>Media Query</h5>
                                    <ProgressBar animated now={55} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </div>
    )
}
export default Skill;