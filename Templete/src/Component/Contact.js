import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class Contact extends Component {
  render() {
    return (
      <>
       <div className="container-fluid">
         <div className="layout_border">
            {/* <!-- contact section start --> */}
            <div className="contact_section layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <h1 className="contact_taital">Get In Touch</h1>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <div className="contact_section_2">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="mail_section_1">
                              <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                              <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                              <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                              <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                              <div className="send_bt"><Link to="#">SEND</Link></div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="map_main">
                              <div className="map-responsive">
                                 <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="340" frameBorder="0" style={{border:"0", width:"100%"}} allowFullScreen="" title="get"></iframe>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- contact section end -->
            <!-- layout_border end --> */}
         </div>
      </div>
       
      </>
    )
  }
}
