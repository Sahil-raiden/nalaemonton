import React from 'react'
import './assets/css/blog.css';
import Navbar from './navBar';
import cybersecurity from './assets/image/academy_bg.jpg'
function Blog() {
  return (
    <div>
        <Navbar/>
        <div className='blog'>
             <div className='blog-content_1'>
                 <h1>_BLOGS_</h1>
             </div>
             <div className='blog-post'>
                 <div className='blog-post_1 post'>
                       <div className='post-img'>
                         <img src={cybersecurity} alt="intsagram_Post"/>
                       </div>
                       <div className='post-description'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                       </div>

                 </div>
                 <div className='blog-post_2 post'>
                 <div className='post-img'>
                 <img src={cybersecurity} alt="intsagram_Post"/>
               </div>
               <div className='post-description'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
               </div>

                 </div>



                 <div className='blog-post_3 post'>
                 <div className='post-img'>
                 <img src={cybersecurity} alt="intsagram_Post"/>
               </div>
               <div className='post-description'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
               </div>
                 </div>

             </div>
         </div>
    </div>
  )
}

export default Blog