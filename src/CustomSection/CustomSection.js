import React, { Component } from 'react';
import './CustomSection.css';

class CustomSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="custom_Section_wrapper">
                {this.props.children}
            </div>
         );
    }
}
 
export default CustomSection;