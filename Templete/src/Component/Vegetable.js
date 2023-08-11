import React from 'react'
 import { Link } from 'react-router-dom'

function Vegetable() {
  return (
    <>
      <div className="container-fluid">
         <div className="layout_border">
            {/* <!-- vagetables section start --> */}
            <div className="vagetables_section layout_padding margin_bottom90">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <h1 className="vagetables_taital">Our Vagetables</h1>
                        <p className="vagetables_text">Passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                     </div>
                  </div>
                  <div className="courses_section_2">
                     <div className="row">
                        <div className="col-md-4">
                           <div className="hover01 column">
                              <figure><img src="images/img-1.png" alt=""/></figure>
                           </div>
                           <h3 className="harshal_text">Harshal</h3>
                           <h3 className="rate_text">$19</h3>
                           <div className="read_bt_1"><Link to="#">Read More</Link></div>
                        </div>
                        <div className="col-md-4">
                           <div className="hover01 column">
                              <figure><img src="images/img-2.png" alt=""/></figure>
                           </div>
                           <h3 className="harshal_text">Foodism</h3>
                           <h3 className="rate_text">$19</h3>
                           <div className="read_bt_1"><Link href="#">Read More</Link></div>
                        </div>
                        <div className="col-md-4">
                           <div className="hover01 column">
                              <figure><img src="images/img-3.png" alt=""/></figure>
                           </div>
                           <h3 className="harshal_text">Seven</h3>
                           <h3 className="rate_text">$19</h3>
                           <div className="read_bt_1"><Link href="#">Read More</Link></div>
                        </div>
                     </div>
                  </div>
                  <div className="vagetables_section_2">
                     <div className="row">
                        <div className="col-md-4">
                           <div className="hover01 column">
                              <figure><img src="images/img-4.png" alt=""/></figure>
                           </div>
                           <h3 className="harshal_text">Cyrus</h3>
                           <h3 className="rate_text">$19</h3>
                           <div className="read_bt_1"><Link href="#">Read More</Link></div>
                        </div>
                        <div className="col-md-4">
                           <div className="hover01 column">
                              <figure><img src="images/img-5.png" alt=""/></figure>
                           </div>
                           <h3 className="harshal_text">Elianna</h3>
                           <h3 className="rate_text">$19</h3>
                           <div className="read_bt_1"><Link href="#">Read More</Link></div>
                        </div>
                        <div className="col-md-4">
                           <div className="hover01 column">
                              <figure><img src="images/img-6.png" alt=""/></figure>
                           </div>
                           <h3 className="harshal_text">Friedman</h3>
                           <h3 className="rate_text">$19</h3>
                           <div className="read_bt_1"><Link href="#">Read More</Link></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- vagetables section end -->
            <!-- layout_border end --> */}
         </div>
      </div>
    </>
  )
}

export default Vegetable
