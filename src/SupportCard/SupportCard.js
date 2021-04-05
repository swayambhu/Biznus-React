import React, { Component } from 'react';
import './SupportCard.css';

class SupportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="support_cart_container">
                <div className="support_card_wrapper">
                    <h2>{this.props.cardNo}</h2>
                    <p>{this.props.name}</p>
                    <img alt={this.props.alt} src={this.props.imgLink} />
                </div>
                <p>{this.props.description}</p>
            </div>
         );
    }
}
 
export default SupportCard;