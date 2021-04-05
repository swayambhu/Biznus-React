import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import DonationLandingPicture from '../assets/donation_landing_picture.jpg';
import './Donate.css';
import CustomSection from '../CustomSection/CustomSection';
import CustomButton from '../CustomButton/CustomButton';
import Footer from '../Footer/Footer';

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <LandingSection 
                    imgLink={DonationLandingPicture}
                    marginTop="135px"
                >
                    <div className="donation_landing_content_wrapper">
                        <h2 className="donate_title">Here at Acme Outdoors</h2>
                        <h3 className="donate_subtitle">every dollar counts</h3>
                        <p className="donate_description">Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times.</p>
                    </div>
                </LandingSection>
                <CustomSection>
                    <div className="btns_container_wrapper">
                        <div className="btns_container">
                            <CustomButton 
                                value="Donate $100" 
                                color="#f9f9f9"
                                fontSize="24px"
                                fontWeight="800"
                                padding="15px 0"
                            />
                            <CustomButton 
                                value="Donate $50" 
                                color="#f9f9f9"
                                fontSize="24px"
                                fontWeight="800"
                                padding="15px 0"
                                borderRadius= "10px"
                                backgroundColor="#EB5757"
                            />
                            <CustomButton 
                                value="Donate $25" 
                                color="#f9f9f9"
                                fontSize="24px"
                                fontWeight="800"
                                padding="15px 0"
                                borderRadius= "10px"
                                backgroundColor="#EB5757"
                            />
                            <CustomButton 
                                value="Donate $15" 
                                color="#f9f9f9"
                                fontSize="24px"
                                fontWeight="800"
                                padding="15px 0"
                                borderRadius= "10px"
                                backgroundColor="#EB5757"
                            />
                            <CustomButton 
                                value="Donate $5" 
                                color="#f9f9f9"
                                fontSize="24px"
                                fontWeight="800"
                                padding="15px 0"
                                borderRadius= "10px"
                                backgroundColor="#EB5757"
                            />
                        </div>
                    </div>
                </CustomSection>
                <Footer />
            </> 
        );
    }
}
 
export default Donate;