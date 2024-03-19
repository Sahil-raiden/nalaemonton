import React from 'react';
import './assets/css/Contact.css';
import Navbar from './navBar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='total'>
      <Navbar />

      <div className='contact-container'>
        <div className='contact-box'>
          <div className="contact">
           
            <div className="rightSide">
              <h1>Contact Us</h1>
            
              <form id="contact-form" method="POST">
                <div className='field_1 field'>
                  <div className='name_field subfield_1'>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                  </div>
                  <div className='email_field subfield_2'>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />
                  </div>
                </div>
                <div className='field_2 field'>
                  <div className='contact_field subfield_1'>
                    <label htmlFor="contact_number">Contact Number</label>
                    <input name="contact_number" placeholder="Enter contact number..." type="text" />
                  </div>
                  <div className='org_field subfield_2'>
                    <label htmlFor="organization">Organization</label>
                    <input name="organization" placeholder="Enter organization..." type="text" />
                  </div>
                </div>
                <div className='field_3 field'>
                  <div className='region_field subfield_1'>
                    <label htmlFor="region">Region</label>
                    <select name="region">
                      <option value="#">Select the Region</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="North America">North America</option>
                      <option value="South America">South America</option>
                      <option value="Africa">Africa</option>
                      <option value="Oceania">Oceania</option>
                    </select>
                  </div>
                  <div className='inquiry_field subfield_2'>
                    <label htmlFor="inquiry_type">Inquiry Type</label>
                    <select name="inquiry_type">
                      <option value="#">Select the Region</option>
                      <option value="Academy">Academy</option>
                      <option value="Service">Service</option>
                    </select>
                  </div>
                </div>
                
                
                <textarea
                  rows="6"
                  placeholder="Enter message..."
                  name="message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
