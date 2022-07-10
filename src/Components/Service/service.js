import React from 'react';
import webdevelopment from '../img/web.png'
import branding from '../img/tag.png'
import ui from '../img/ui.png'
const Service = () => {
    return (
        <div>
            <section className="servicesection" id="srcv">
                <div className="serviceheader">
                    <h1 className="text-center" id="servicehead"> Service</h1>
                    <div className="underline text-center"></div>
                </div>

                <div className="service_body">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card mt-5" id="managecard"  data-aos="fade-right">
                                    <div className="card-title">
                                        <img src={webdevelopment} className="webdevelopmentimage" alt="webdevelopment" />
                                        <h3 className="text-center">Web Design</h3>
                                        <div className="description">
                                            <p>I Build Responsive website with the help of various technique or technology, which helps to make top SEO.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* secondcard */}
                            <div className="col-md-4">
                                <div className="card mt-5"id="managecard"  data-aos="fade-up" >
                                    <div className="card-title">
                                        <img src={ui} className="webdevelopmentimage " alt="webdevelopment" />
                                        <h3 className="text-center">UI Design</h3>
                                        <div className="description">
                                            <p>User interface design or user interface engineering is the design of user interfaces for machines and software.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* third card */}
                            <div className="col-md-4 mb-5">
                                <div className="card mt-5" id="managecard"  data-aos="fade-left">
                                    <div className="card-title">
                                        <img src={branding} className="webdevelopmentimage " alt="webdevelopment" />
                                        <h3 className="text-center">Branding</h3>
                                        <div className="description">
                                            <p>Branding design is professional design. I build branding design as per client requiremnt. Professional design helps to attack user. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Service;