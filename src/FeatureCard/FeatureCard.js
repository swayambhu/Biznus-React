import React, { Component } from 'react';
import './FeatureCard.css';

class FeatureCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="feature_card_wrapper">
                <img alt="verified icon" src={this.props.imgLink} />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
         );
    }
}
 
export default FeatureCard;