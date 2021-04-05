import React, { Component } from 'react';
import './CartDetailsSlide.css';
import { connect } from 'react-redux';
import { removeFromCartAction, clearCartDataAction } from '../actions/actions';
import { Link } from 'react-router-dom';

class CartDetailsSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
         }
    }

    calculateTotalPrice = () =>{
        let tempPrice = 0;
        let calPrice = 0;
        if(this.props?.cartData?.length>0){
            this.props?.cartData?.map((data,index)=>{
                calPrice = data.price * data.count;
                tempPrice = tempPrice + calPrice;

                return this.setState({totalPrice: tempPrice});
            })
        }
        else{
            this.setState({totalPrice: 0});
        }
        
    }

    componentDidMount(){
        this.calculateTotalPrice()
    }

    componentDidUpdate(newProps){
        if(newProps.cartData !== this.props.cartData){
            this.calculateTotalPrice()
        }
    }

    avoidClick(e){
        e.stopPropagation();
      }

    noCartDataMessage=()=>{
        alert("No Item in Cart. Please Add Some Item");
    }

    clearCart=()=>{
        this.props.clearCartData();
    }

    render() { 
        return ( 
            <div onClick={this.avoidClick.bind(this)} className="cart_item_wrapper">
                <div className="cart_detail_top_bar">
                    <h3>Your Cart</h3>
                    <i onClick={this.props.close} className="fas fa-times"></i>
                </div>
                {this.props?.cartData?.length > 0 ?
                    <div className="items_container">
                        {this.props?.cartData?.map((data,index)=>
                            <div className="each_item_wrapper">
                                <div className="item_and_count_wrapper">
                                    <div className="img_and_detail_wrapper">
                                        <img alt={data.name} src={data.preview} />
                                        <div className="name_and_price_wrapper">
                                            <h3>{data.name}</h3>
                                            <p>RS: {data.price}</p>
                                        </div>
                                    </div>
                                    <div className="each_item_count">{data.count}</div>
                                </div>
                                <div className="remove_item_btn" onClick={()=>this.props.removeCartData(data.id)}>Remove</div>
                            </div>
                        )}
                    </div>
                    :
                    <div className="items_container no_item">No Item in Cart</div>
                }
                <div className="checkout_content_wrapper">
                    <div className="subtotal_price_wrapper">
                        <p>Subtotal</p>
                        <p>RS {this.state.totalPrice}</p>
                    </div>
                    <Link to={this.props?.cartData?.length ? "/order_confirmation_page" : ""} onClick={this.props?.cartData?.length ? ()=>this.clearCart() : ()=>this.noCartDataMessage()} className="checkout_btn">Continue to Checkout</Link>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (globalStore) => ({
    cartData: globalStore?.productReducer?.cartData
})

const mapDispatchToProps = {
    removeCartData : (data) =>removeFromCartAction(data),
    clearCartData : () => clearCartDataAction()
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartDetailsSlide);