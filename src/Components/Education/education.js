import React, { Component } from 'react';
import eduimage from '../img/edu.png';
class Edu extends Component {
   
    render() {
        return (
            <section className="educationsection">
            <div>
            <div className="serviceheader">
                    <h1 className="text-center" id="servicehead"> Education</h1>
                    <div className="underlineedu text-center"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            
                        <div className="col-md-4">
                                <div className="eduimage">
                                    <img src={eduimage} id="edui" alt="educationimage"/>
                                </div>
                            </div>
                        <div className="col-md-8">
                            <div className=" schoolname">
                                <li className="justify-text">SLC at Shree Nuwar Subedi Thar Higher Secondary School, Kushma Municipality 01 Pang</li>
                                <li className="justify-text">+2 at Shree Himalaya Higher Secondary School, Kushma Municipality 02 Khurkot</li>
                                <li className="justify-text">Information Technology at International School of management & technology,Kaski Pokhara </li>
                            </div>
                            </div>

                           </div>
                    </div>
                </div>
                </section>
        );
    }
}



export default Edu;