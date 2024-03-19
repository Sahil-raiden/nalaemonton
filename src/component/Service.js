import React from 'react'
import './assets/css/Service.css'
import Navbar from './navBar'
import WhatsAppButton from './whatsapp';


export const Service = () => {

    const emailAddress = 'buisness@nalaemton.com';
   
    return (
   
        <div>
            <Navbar />
            <div className='wrapper'>
                <div className='service-container'>
                     <h1 className='Main'>- E X P L O R E - O U R - S E R V I C E S - </h1> 
                     {/* <button type="submit">Download Brochure</button> */}
                </div>

                <div className='service-box'>
                    <h1>Penetration Testing</h1>

                    <p>In an era where cyber threats are ever-evolving, safeguarding your digital assets is paramount.  At Nalaemton Infotech, we offer cutting-edge Penetration Testing services designed to identify and mitigate potential security risks, ensuring the resilience of your digital infrastructure.</p>
                
                </div>
                <div className='service-box'>
                    <h1>Our Approach</h1>
                    <p><span>1. Comprehensive Assessments:</span><br />
                        Our expert penetration testers conduct thorough assessments, emulating the tactics employed by cybercriminals. We explore every potential avenue of vulnerability, from network infrastructure to web applications and beyond.<br /><br />

                        <span>2. Tailored Solutions:</span><br />
                        Understanding that every organization is unique, our penetration testing services are customized to align with your specific industry, technology stack, and regulatory requirements. This tailored approach ensures that we address your organization's unique security challenges.<br /><br />

                        <span>3. Realistic Testing Scenarios:</span><br />
                        We go beyond automated scanning tools by employing manual testing techniques that mirror the sophisticated methods employed by cyber adversaries. This ensures a realistic evaluation of your security posture.
                    </p>
                </div>

                <div className='service-box'>
                    <h2>Why Choose Nalaemton Infotech?</h2>
                    <p> 1. Expertise <br />
                        
                        2. Cutting-Edge Tools<br />
                       
                        3. Actionable Reporting<br /><br/>
                        
                        At Nalaemton Infotech, we believe in empowering organizations through proactive cybersecurity measures. Our Penetration Testing services are a strategic investment in fortifying your defences against the ever-evolving landscape of cyber threats.

                        Secure your digital future with Nalaemton Infotech's Penetration Testing services. <br />

                        Contact us today at <a href={ `mailto:${emailAddress}`} >buisness@nalaemton.com</a> to schedule your assessment.<br/><br/>
                        <h4>For more details, <a href="./assets/Brochure/Pentest_Service.pdf" download='Pentest_Service.pdf'>
                         click here  </a></h4>

                    </p>
                </div> 
                <div className='whatsapp-logo'>
                <WhatsAppButton />
                 </div> 

            </div>
        </div>
    )
}

export default Service;
