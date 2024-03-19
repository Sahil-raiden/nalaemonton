// Academy.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faBullseye, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

import Carousel from './carousel'
import './assets/css/academy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './navBar';
import bc from './assets/image/bootcamp_bg.jpg'
import bb from './assets/image/Bug-Bounty-graphic.png'
//import pt_1 from './assets/image/pt.jpg'
//import AN from './assets/image/apply_now.jpg'
import WhatsAppButton from './whatsapp';

const Courses = ({ icon, title, description, onClick }) => (
  <div className="course-item rounded-4 m-1"  onClick={onClick} >
    <div className="course-icon bg-transparent border rounded p-1">
      <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={icon} className="fa-2x text-danger" />
      </div>
    </div>
    <h3 className="mb-3 text-danger">{title}</h3>
    <p className="text-body mb-0">{description}</p>
    <h4 className='text-danger mt-1'onClick={onClick}>Click here </h4>
  </div>
);

const Academy = () => {
  const [showBootcamp, setShowBootcamp] = useState(false);
  const [showBugBounty, setShowBugBounty] = useState(false);
  const [showPentesting, setShowPentesting] = useState(false);

  const handleBootcampClick = () => {
    setShowBootcamp(!showBootcamp);
    setShowBugBounty(false);
    setShowPentesting(false);
  };

  const handleBugBountyClick = () => {
    setShowBugBounty(!showBugBounty);
    setShowBootcamp(false);
    setShowPentesting(false);
  };

  const handlePentestingClick = () => {
    setShowBootcamp(false);
    setShowBugBounty(false);
    setShowPentesting(!showPentesting);
  };

  return (
    <div className='academy'>
      <Navbar />
      <div className="container  mt-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-4 py-5">
              <span className="text-dark text-uppercase">Academy</span>
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <Courses
                icon={faChalkboardTeacher}
                title="Bootcamps & Workshops"
                description="Empowering the Cybersecurity Leaders of Tomorrow: Nalaemton Infotech’s Exclusive Bootcamps and Workshops"
                onClick={handleBootcampClick}
              />
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <Courses icon={faBullseye} title="Bug Bounty Hunter" description="Unleash Your Potential: Nalaemton Infotech’s Bug Bounty Hunter Certification Course" onClick={handleBugBountyClick}/>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <Courses icon={faShieldAlt} title="Pentesting Professional" description=" Elevate Your Career :Nalaemton Infotech's Pentesting Professional Course" onClick={handlePentestingClick} />
            </div>
          </div>
          {/* Bootcamp */}
          <div className='bootcamp p-5 mt-5 rounded-4' style={{ display: showBootcamp ? 'block' : 'none' }}>
            <div className="d-flex align-items-center justify-content-center wow fadeInUp bootcamp_bg" data-wow-delay="0.1s">
              <div className="text-center">
                <h1 className="mb-3">
                  <span className="text-uppercase text-light">Bootcamp & Workshop</span>
                </h1>
                <h2><i>Empowering the Cybersecurity Leaders of Tomorrow</i></h2>
              </div>
            </div>
            <div className="row">
              <div className="col pt-5">
                <h4>
                  In the ever-expanding digital landscape, the need for skilled cybersecurity professionals has never been more critical. Nalaemton Infotech is proud to announce a groundbreaking initiative aimed at nurturing the next generation of cybersecurity leaders — our exclusive Bootcamps and Workshops tailored for college students.
                </h4>
              </div>
              <div className="col-lg-6 pt-4">
                <img src={bc} alt="bc" className="img-fluid" />
              </div>
            </div>
            <div className='row mb-1 content_1 py-5' >
            <div  className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className='text-danger '>Why Cybersecurity Bootcamps Matter?</h3>
            <p>The world of cybersecurity is dynamic, challenging, and, most importantly, essential. As technology advances, so do the methods of cyber threats. Nalaemton Infotech recognizes the urgency of preparing students for this rapidly evolving landscape. Our Bootcamps and Workshops serve as a gateway for students to delve into the intricacies of cybersecurity, equipping them with practical skills and knowledge that transcend traditional classroom learning.</p>
            </div>
         </div>
          
            {showBootcamp && (
              <div className='row mb-2 content_1 py-3'>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h1 className="mb-3 py-5">
                    <span className="text-danger  text-uppercase">Benefits for Colleges and Students </span>
                  </h1>
                </div>
                <div className='carousel'>
                  <Carousel benefits={[
                    { title: "Skill development", description: "Equip your students with hands-on skills that are directly applicable in the cybersecurity industry." },
                    { title: "Networking Opportunities", description: "Connect your students with industry professionals and peers, fostering valuable relationships and opening doors to future opportunities." },
                     {title:"Career Advancement", description:"Provide a competitive edge to your students as they enter the job market with a comprehensive understanding of cybersecurity principles and practices."},
                     { title:"Industry-Recognized Certifications", description:"Participants have the chance to earn certifications that are recognized and respected in the cybersecurity field."}
                    
                  ]}/>
                </div>
              </div>
            )}
            <div className='row mb-2 content_1 py-5'>
            <div  className=" wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="text-center text-danger  ">How Colleges Can Participate?</h3>
              <p className="text-align-left ">Nalaemton Infotech invites colleges to partner with us in this transformative journey. By hosting our Bootcamps and Workshops on your campus, you empower your students with unparalleled learning experiences, demonstrating your commitment to their academic and professional success.</p>
            </div>
         </div>
         <div className='row mb-2 content_1 py-5'>
            <div  className=" wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="text-center text-danger ">Secure the Future Together</h3>
            <p className="text-align-left">Nalaemton Infotech believes in the power of education to shape a secure digital future.We invite colleges to join us in this mission,fostering a generation of cybersecurity professionals who will lead the charge in defending against cyber threats.</p>
            <p className="text-align-left">Don’t miss this opportunity to empower your students with the skills and knowledge they need to thrive in the cybersecurity landscape.Partner with Nalaemton Infotech today, and together, let’s secure the future.<br/><br/>For inquiries and collaboration opportunities, contact us at <a href="mailto:business@nalaemton.com">business@nalaemton.com</a>.</p>
            </div>
         </div>
          </div>
          {/*bugg */}
          <div className='bug-bounty-hunter p-5  mt-5 rounded-4' style={{ display: showBugBounty ? 'block' : 'none' }} >
            <div className=" p-3 d-flex align-items-center justify-content-center wow fadeInUp bug-bounty-hunter_bg" data-wow-delay="0.1s" >
              <div className="text-center">
                <h1 className="mb-3">
                  <span className="text-uppercase text-light">Bug Bounty Hunter</span>
                </h1>
                <h2><i>Unleash Your Potential</i></h2>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-6 pt-4">
                <img src={bb} alt="bb" className="img-fluid" />
              </div>
              <div className="col-lg-6 pt-3">
                <h4>
                  In the ever-evolving world of cybersecurity, the demand for skilled professionals capable of identifying vulnerabilities has never been higher. Nalaemton Infotech proudly presents an unparalleled opportunity for tech enthusiasts and cybersecurity aspirants – our Bug Bounty Hunter Certification Course.
                </h4>
              </div>
            </div>
            {/* Benefits Carousel */}
          
            {showBugBounty && (
          
              
             <div>
             <div className='row mb-2 content_1 py-2'>
             <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
               <h1 className="mb-3 py-5">
                 <span className="text-danger  text-uppercase">What Sets Nalaemton Infotech’s Certification Course Apart?</span>
               </h1>
             </div>
             <div className='carousel '>
               <Carousel benefits={[
                 { title: "Practical Learning", description: "Our course goes beyond theoretical knowledge. Participants engage in real-world scenarios, hands-on exercises, and simulated bug bounty programs to develop practical skills that mirror the challenges faced in the field" },
                 { title: "Expert Instructors", description: "Learn from seasoned bug bounty hunters and cybersecurity professionals who bring their real-world experiences into the virtual classroom. Gain insights, tips and tricks from those who’ve successfully navigated the bug bounty landscape." },
                  {title:"Comprehensive Curriculum", description:"Our course encompasses advanced exploitation and ethical hacking principles, fostering well-rounded cybersecurity experts with comprehensive bug hunting skills."},
     
                 
               ]}/>
             </div>
           </div>

             <div className='row mb-2 content_1 py-5'>
             <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
               <h1 className="mb-3 py-3">
                 <span className="text-danger  text-uppercase">Key Highlights</span>
               </h1>
             </div>
             <div className='carousel row'>
               <Carousel benefits={[
                 { title: "Real-world Simulations", description: "Engage in simulated bug bounty programs on live platforms to gain hands-on experience in identifying and reporting vulnerabilities." },
                 { title: "Certification Recognition", description: "Receive a globally recognized certification upon successful completion of the course, validating your expertise as a bug bounty hunter." },
                 {title:"Networking Opportunities" ,description:"Connect with like-minded individuals, industry experts and potential employers through our exclusive community forums and networking events."}
               ]}/>
             </div>
           </div>
             </div>
            )}
            <div className="row pt-5 ">
            {/*<div className="col-lg-4">
              <img src={AN} alt="bc" className="img-fluid " />
            </div>
            <div className=" col-lg-6 pt-5">
             <h2 className='text-danger text-center'>Register Here</h2>
              <h3 >
              Secure your spot by registering for the course. Limited seats are available, so act fast to embark on this transformative journey.
              </h3>
              <br/>
              
             
            </div> */}
          
          </div>
          <div className='row mb-2 content_1 py-3'>
          <div  className=" wow fadeInUp" data-wow-delay="0.1s">
          <h3 className="text-center text-danger">Secure the Future Together</h3>
          <p className="text-align-left">Nalaemton Infotech believes in the power of education to shape a secure digital future.We invite colleges to join us in this mission,fostering a generation of cybersecurity professionals who will lead the charge in defending against cyber threats.</p>
          <p className="text-align-left">Don’t miss this opportunity to empower your students with the skills and knowledge they need to thrive in the cybersecurity landscape.Partner with Nalaemton Infotech today, and together, let’s secure the future.<br/><br/>For inquiries and collaboration opportunities, contact us at <a href="mailto:business@nalaemton.com">business@nalaemton.com</a>.</p>
          </div>
          
       </div>
       <h3>For more details, <a href="./assets/Brochure/Bug_Bounty_Hunter_Brochure.pdf" download='Bug_Bounty_Hunter_Brochure.pdf'>
       click here
      </a></h3>
          </div>


          {/*pen*/}
          <div className=' pentesting-professional p-5 mt-5 rounded-4' style={{ display: showPentesting ? 'block' : 'none' }}>
 <div className="d-flex align-items-center justify-content-center wow fadeInUp pentesting-professional_bg" data-wow-delay="0.1s" >
          <div className="text-center">
            <h1 className="mb-3">
              <span className="text-uppercase text-light">Pentesting Professional</span>
            </h1>
            <h2><i>Elevate Your Career</i></h2>
          </div>
        </div>
 <div className="row pt-5">
 
 <div className="col ">
   <h3 className="text-align-left pt-4 ">
   Nalaemton Infotech’s Pentesting Professional course will certify the successful 
   candidate has the knowledge and skills required to plan and scope a 
   penetration testing engagement including vulnerability scanning, analyze 
   results and produce a written report with remediation techniques     
   </h3>
 </div>
 
</div>
 

 <div className="row mt-5 d-flex align-items-center justify-content-center ">
 <div className='col-lg-6 p-4  '>
 <h3 className='text-danger t'>Topics Covered</h3>
 <ul>
   <li> Web Application Penetration Testing</li>
   <li>Mobile Application Penetration Testing</li>  
   <li> API Penetration Testing</li>
   <li> Attacks and Exploits</li>
   <li> Tools and Code Analysis
   </li>
 </ul>
 
</div>

<div className="col-lg-6 p-4  ">
<h3 className='text-danger  t '>Salient Features</h3>
<ul className='ms-2'>
 <li> Tailored Curriculum</li>
 <li> Personalized Mentorship</li>
 <li> Hands-on Labs</li>
 <li> Real-time project/Internship</li>
 <li> Placement Assistance
 </li>
</ul>
</div>
</div> 


      
<div className="row ">
   {/* <div className="col-lg-6">
      <img src={AN} alt="bc" className="img-fluid " />
    </div>
    <div className=" col-lg-6 mt-5 py-5">
     <h2 className='text-danger text-center'>Register Here</h2>
      <h3 >
      Secure your spot by registering for the course. Limited seats are available, so act fast to embark on this transformative journey.
      </h3>
      <br/>
     

    </div> */}
    <h3>For more details, <a href="./assets/Brochure/Bug_Bounty_Hunter_Brochure.pdf" download='Bug_Bounty_Hunter_Brochure.pdf'>
    click here
   </a></h3>
  </div>


</div>
        </div>
      <div className='whatsapp-logo'>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Academy;
