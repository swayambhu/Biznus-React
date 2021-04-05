import React, { Component } from 'react';
import LandingSection from '../LandingSection/LandingSection';
import about_landing_picture from '../assets/about_landing_picture.jpg';
import './About.css';
import {Link} from 'react-router-dom'
import CustomSection from '../CustomSection/CustomSection';
import FeatureCard from '../FeatureCard/FeatureCard';
import VerifiedIcon from '../assets/verified_icon.svg';
import CartIcon from '../assets/cart_icon1.svg';
import TransportIcon from '../assets/transport_icon.svg';
import ChatIcon from '../assets/chat_icon.svg';
import OwnerDetailCard from '../OwnerDetailCard/OwnerDetailCard';
import JohnDoePic from '../assets/john_doe.png';
import JaneDoePic from '../assets/jane_doe.png';
import AboutFooterWallpaper from '../assets/about_footer_wallpaper.jpg';
import Footer from '../Footer/Footer';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <>
                <LandingSection 
                    imgLink={about_landing_picture}
                    paddingLeft="6%"
                    paddingTop="6%"
                    marginTop="135px"
                >
                    <h1 className="about_title">Your Adventure Awaits</h1>
                    <p className="about_description">Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.</p>
                    <a className="about_landing_btn" href="./shop">Shop Merch</a>
                </LandingSection>
                <CustomSection>
                    <div className="container_wrapper">
                        <div className="feature_detail_wrapper">
                            <div>WHY ACME OUTDOORS?</div>
                            <h2>We’re the best in the business.</h2>
                            <p>From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer experience since 1989.</p>
                        </div>
                        <div className="features_wrapper">
                            <FeatureCard
                                imgLink={VerifiedIcon}
                                title="Lifetime Warranty"
                                description="All our products — whether we make them or not — are backed by our lifetime warranty."
                            />
                            <FeatureCard
                                imgLink={CartIcon}
                                title="Shopping Experience"
                                description="All our products — whether we make them or not — are backed by our lifetime warranty."
                            />
                            <FeatureCard
                                imgLink={TransportIcon}
                                title="On-time Delivery"
                                description="All our products — whether we make them or not — are backed by our lifetime warranty."
                            />
                            <FeatureCard
                                imgLink={ChatIcon}
                                title="Best in Class Service"
                                description="All our products — whether we make them or not — are backed by our lifetime warranty."
                            />
                        </div>
                    </div>
                </CustomSection>
                <CustomSection>
                    <div className="meet_owners_wrapper">
                        <div className="meet_owner_image_wrapper">
                            {/* <img alt="owner_stories_image" src={OwnerStoriesImage} /> */}
                        </div>
                        <div className="meet_the_owner_detail_wrapper">
                            <h2>Meet the Owners</h2>
                            <p>
                                John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.
                                <br />
                                <br />
                                While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.
                                <br />
                                <br />
                                Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions.
                                <br />
                                <br />
                                While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!
                                <br />
                                <br />
                                In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.
                                <br />
                                <br />
                                To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.
                            </p>
                        </div>
                    </div>
                </CustomSection>
                <CustomSection>
                    <div className="owner_profiles_wrapper">
                        <OwnerDetailCard 
                            imgLink={JohnDoePic}
                            title="John Doe"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                        />
                        <OwnerDetailCard 
                            imgLink={JaneDoePic}
                            title="Jane Doe"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                        />
                    </div>
                </CustomSection>
                <LandingSection
                    imgLink={AboutFooterWallpaper}
                    paddingLeft="6%"
                    paddingTop="6%"
                >
                    <h2 className="about_title">Need Help?</h2>
                    <p className="about_footer_description">Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need to adjust an order or delivery details, we're ready to help!</p>
                    <Link className="about_landing_btn" to="./contact">Contact Support</Link>
                </LandingSection>
                <Footer />
            </>
         );
    }
}
 
export default About;