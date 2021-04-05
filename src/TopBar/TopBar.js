import React, { Component } from 'react';
import './TopBar.css';
import BrandLogo from '../assets/brand_logo.svg';
import CartIcon from '../assets/cart_icon.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeProductsDataAction } from '../actions/actions';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalCount: 0
         }
    }

    calculateItemCount = () =>{
        let totalCount = 0;
        if(this.props?.cartData?.length > 0){
            this.props?.cartData?.map((data,index)=>{
                totalCount = totalCount + data.count;
                return this.setState({totalCount: totalCount});
            })
        }
        else{
            this.setState({totalCount: 0});
        }
    }

    componentDidMount(){
        this.calculateItemCount();
    }

    componentDidUpdate(newProps){
        if(newProps.cartData !== this.props.cartData){
            this.calculateItemCount();
        }
    }

    

    render() { 
        return ( 
            <div className="top_bar_container">
                <Link to='/'>
                    <img src={BrandLogo} alt="brand logo" />
                </Link>
                <nav className="nav_wrapper">
                    <Link to='/' className="nav_item">Home</Link>
                    <Link to='/about' className="nav_item">About</Link>
                    <Link to='/shop' className="nav_item">Shop</Link>
                    <Link to='/donate' className="nav_item">Donate</Link>
                    <Link to='/contact' className="nav_item">Contact</Link>
                    <div onClick={this.props.onClick} className="cart_icon_wrapper">
                        <img src={CartIcon} alt="cart icon" />
                        <p>{this.state.totalCount}</p>
                    </div>
                </nav>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) => ({
    cartData: globalStore?.productReducer?.cartData
})

const mapDispatchToProps = {
    storeProductsData : (data) =>storeProductsDataAction(data)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);