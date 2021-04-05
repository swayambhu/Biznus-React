import React, { Component } from 'react';
import './CustomInput.css';

class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input 
                style={{
                    width:`${this.props.width}`
                }}
                type={this.props.type} 
                placeholder={this.props.placeholder} 
                maxLength={this.props.maxLength}
                name={this.props.name}
                id={this.props.id}
                required={this.props.required}
            />
         );
    }
}
 
export default CustomInput;