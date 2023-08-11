import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './About.css'
export default class About extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
         <div className="layout_border">
            {/* <!-- about section start --> */}
            <div className="about_section layout_padding margin_bottom90">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <h1 className="about_taital">About Us</h1>
                        <p className="about_text">Passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                     </div>
                  </div>
                  <div className="about_section_2">
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <div className="about_img"><img src="images/about-img.png" alt=""/></div>
                     </div>
                     <div className="col-md-6">
                        <div className="fresh_taital">Fresh any</div>
                        <p className="ipsum_text">Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedvariations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                        <div className="read_bt"><Link to="#">Read More</Link></div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- about section end -->
            <!-- layout_border end --> */}
         </div>
      </div>
      </>
    )
  }
}
