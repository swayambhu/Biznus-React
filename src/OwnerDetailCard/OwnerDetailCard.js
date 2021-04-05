import React, { Component } from 'react';
import './OwnerDetailCard.css';

class OwnerDetailCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="owner_card_wrapper">
                <img alt={this.props.alt} src={this.props.imgLink} />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
         );
    }
}
 
export default OwnerDetailCard;