import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import ContactLandingPicture from '../assets/contact_landing_picture.jpg';
import './Contact.css';
import ChatIcon from '../assets/chat_icon.svg';
import ChatWarningIcon from '../assets/chat_warning_icon.svg';
import CustomSection from '../CustomSection/CustomSection';
import CustomInput from '../CustomInput/CustomInput';
import Footer from '../Footer/Footer';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <LandingSection
                    marginTop="135px"
                >
                    <div className="contact_landing_wrapper">
                        <div className="contact_info_container">
                            <h1>Contact Acme Outdoors</h1>
                            <div className="contact_blocks_wrapper">
                                <div className="contact_block">
                                    <img alt="chat icon" src={ChatIcon} />
                                    <h2>Contact Us</h2>
                                    <p>Just want to say hi? We'd love to hear from you. We love our customers and community! </p>
                                    <a href="#contsupp">Send Us A Message</a>
                                </div>
                                <div className="contact_block">
                                    <img alt="chat warning icon" src={ChatWarningIcon} />
                                    <h2>Get Support</h2>
                                    <p>Have an issue with an order or with a product you purchased from us? Fill out our support form.</p>
                                    <a href="#contsupp">Contact Support</a>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="contact_wallpaper"
                            style={{
                                background: `linear-gradient(90deg, #222, rgba(34, 34, 34, 0.18) 76%), url(${ContactLandingPicture})`,
                                backgroundPosition: "0px 0px, 50% 50%",
                                backgroundSize: "auto, cover",
                                backgroundRepeat: "repeat, no-repeat"
                            }}
                        ></div>
                    </div>
                </LandingSection>
                <CustomSection>
                    <div className="contact_us_container">
                        <div className="contact_us_left">
                            <h2>Contact Us</h2>
                            <p>Acme Outdoors 
                                <br />
                                123 Rainy Street
                                <br />
                                Oklahoma City, OK 73129
                            </p>
                            <p>
                                <strong>General Inquiries:</strong> (405) 555-5555
                                <br />
                                <strong>General Support:</strong> (405) 555-5556
                            </p>
                        </div>
                        <div className="contact_us_right">
                            <h2>Contact Form</h2>
                            <p>Send us a message and we'll get back to you as soon as we can!</p>
                            <form id="email_form" name="email_form" className="contact_form_wrapper">
                                <label htmlFor="name">Name</label>
                                <CustomInput 
                                    type="text" 
                                    maxLength="256" 
                                    name="name" 
                                    placeholder="Enter your name" 
                                    id="name" 
                                    width="100%"
                                />
                                <label htmlFor="email">Email Address</label>
                                <CustomInput 
                                    type="email" 
                                    maxLength="256" 
                                    name="email" 
                                    required="true" 
                                    placeholder="Enter your email address"
                                    id="email"
                                    width="100%"
                                />
                                <label htmlFor="message">Your Message </label>
                                <textarea placeholder="Enter your message" maxLength="5000" id="message" name="message" />
                                <input className="submit_btn"
                                    type="submit" 
                                    value="Submit" 
                                    data-wait="please-wait" 
                                />
                            </form>
                        </div>
                    </div>
                </CustomSection>
                <Footer />
            </> 
        );
    }
}
 
export default Contact;