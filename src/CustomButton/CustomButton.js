import React, { Component } from 'react';
import './CustomButton.css';

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <a href={this.props.link} className="custom_btn_wrapper">
                <div
                    className="btn_cont"
                    style={{
                        fontSize: `${this.props.fontSize}`,
                        fontWeight: `${this.props.fontWeight}`,
                        color: `${this.props.color}`,
                        padding: `${this.props.padding}`,
                    }}
                >
                    {this.props.value}
                </div>
            </a>
         );
    }
}
 
export default CustomButton;