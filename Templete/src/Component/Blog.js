import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
      <div className="container-fluid">
         <div className="layout_border">
            {/* <!-- blog section start --> */}
            <div className="blog_section layout_padding margin_bottom90">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <h1 className="blog_taital">Our Blog</h1>
                        <p className="blog_text">Passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                     </div>
                  </div>
                  <div className="blog_section_2 layout_padding">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="blog_taital_1">Our Blog</div>
                           <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                           <div className="readmore_bt"><Link to="#">Read More</Link></div>
                        </div>
                        <div className="col-md-6">
                           <div className="blog_img"><img src="images/img-3.png" alt=""/></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- blog section end -->
            <!-- layout_border end --> */}
         </div>
      </div>
    </>
  )
}

export default Blog
