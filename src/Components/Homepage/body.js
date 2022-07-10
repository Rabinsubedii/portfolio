import React from 'react';
import headimg from '../img/headimg.png';
import { Link } from 'react-router-dom'
const Body = () => {
  return (

    <div className="navbar_body">

      {/* Bodytext */}
      <section id="hm " className="imageclassbody">

        <div className="container" >
          <div className="row">
            <div className="col-md-6">
              <div className="nametext" data-aos="fade-right">
                <h1 className="animate__animated animate__rotateInUpLeft hello" > Hello I`m </h1>
                <h1 className="rabin">Rabin Subedi</h1>
                <p> Web Designer</p>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hire Me</button>

              </div>
            </div>
            <div className="col-md-6">
              <img src={headimg} className="headimage" alt="logoimage"></img>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Hire Me</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <label for="exampleInputEmail1">Company Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter Company Name" required></input>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Location</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter Company Location"></input>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Job Post</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter Job Post"></input>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Salary Offer</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Salary Offer"></input>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Hire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Body;