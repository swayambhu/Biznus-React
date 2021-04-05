import React, { Component } from 'react';
import './OrderConfirmationPage.css';
import Footer from '../Footer/Footer';
import BlackBanner from '../BlackBanner/BlackBanner';
import CustomSection from '../CustomSection/CustomSection';

class OrderConfirmationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <>
                <BlackBanner title="Order Status" />
                <CustomSection>
                    <div className="order_confimation_wrapper">
                        <i class="fas fa-check-circle"></i>
                        <h3>Order Placed Successfully</h3>
                        <p>We will send you confirmation on registered email</p>
                    </div>
                </CustomSection>
                <Footer/>
            </>
         );
    }
}
 
export default OrderConfirmationPage;