import React, { Component } from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom'; 

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Link to={{
                pathname: '/product_details_page',
                state:  this.props?.data?.id 
                }}
            className="product_card_wrapper">
                <div
                    className="product_card_image_wrapper"
                    style={{
                        background: `linear-gradient(360deg, #222, rgba(34, 34, 34, 0)), url(${this.props.data.preview})`,
                        backgroundPosition: "0px 0px, 50% 50%",
                        backgroundSize: "auto, cover",
                    }}
                ></div>
                <div className="prod_card_name">{this.props.data.name}</div>
                <div className="prod_card_price">RS: {this.props.data.price}</div>
                <a href="./detail" className="prod_card_details_button" >Details</a>
            </Link>
         );
    }
}
 
export default ProductCard;