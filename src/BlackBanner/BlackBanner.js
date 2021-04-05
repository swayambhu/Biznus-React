import React, { Component } from 'react';
import './BlackBanner.css';

class BlackBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="black_banner_title">
                <h2>{this.props.title}</h2>
            </div>
         );
    }
}
 
export default BlackBanner;