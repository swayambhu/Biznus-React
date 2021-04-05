import React, { Component } from 'react';
import './LandingSection.css';

class LandingSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="landing_wrapper"
                style={{
                    background: `linear-gradient(360deg, #222, rgba(34, 34, 34, 0)), url(${this.props.imgLink})`,
                    backgroundPosition: "0px 0px, 50% 50%",
                    backgroundSize: "auto, cover",
                    marginTop: `${this.props.marginTop}`,
                    paddingLeft: `${this.props.paddingLeft}`,
                    paddingTop: `${this.props.paddingTop}`,
                    marginLeft: `${this.props.marginLeft}`,
                    marginRight: `${this.props.marginRight}`
                }}
            >
                {this.props.children}
            </div>
         );
    }
}
 
export default LandingSection;