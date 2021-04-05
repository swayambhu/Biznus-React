import React, { Component } from 'react';
import './Footer.css';
import BrandLogo from '../assets/brand_logo.svg';
import FacebookLogo from '../assets/Facebook_Logo.svg';
import TwitterLogo from '../assets/Twitter_Logo.svg';
import InstagramLogo from '../assets/Instagram_Logo.svg';

class  Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="footer_wrapper">
                <div className="footer_container">
                    <div className="container">
                        <img alt="brand icon" src={BrandLogo}/>
                        <div className="footer_logos_wrapper">
                            <a href="https://en.wikipedia.org/wiki/Facebook" className="footer_logo_wrapper">
                                <img width="30" alt="facebook icon" src={FacebookLogo} />
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Twitter" className="footer_logo_wrapper">
                                <img width="30" alt="twitter icon" src={TwitterLogo} />
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Instagram" className="footer_logo_wrapper">
                                <img width="30" alt="instagram icon" src={InstagramLogo} />
                            </a>
                        </div>
                    </div>
                    <div className="trademark_wrap">Made By <span className="author_sign">Swayambhu Dhuri</span>. © Edyoda.</div>
                </div>
            </footer>
         );
    }
}
 
export default  Footer;