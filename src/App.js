import React, { Component } from 'react';
import Announcement from './AnnouncementBar/AnnouncementBar';
import TopBar from './TopBar/TopBar';
import Home from './Home/Home';
import About from './About/About';
import Shop from './Shop/Shop';
import Donate from './Donate/Donate';
import Contact from './Contact/Contact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CovidAlert from './CovidAlert/CovidAlert';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
import CartDetailsSlide from './CartDetailsSlide/CartDetailsSlide';
import OrderConfirmationPage from './OrderConfirmationPage/OrderConfirmationPage';
import { connect } from 'react-redux';
import { cartOpenCloseAction } from './actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }


  displayCart = () => {
    this.props.cartOpenClose();
  }







  render() {
    return ( 
      <BrowserRouter className="main_container">
        {
          this.props?.cartOpen ?
            <div  onClick={this.displayCart} className="cart_content_container">
              <CartDetailsSlide close={this.displayCart} />
            </div>
            :
            ""
        }
        <div className="top_bar_wrapper">
          <Announcement />
          <TopBar onClick={this.displayCart} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route path="/covid_alert" component={CovidAlert} />
          <Route path="/product_details_page" component={ProductDetailsPage} />
          <Route path="/order_confirmation_page" component={OrderConfirmationPage} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
const mapStateToProps = (globalStore) => ({
  cartOpen: globalStore?.productReducer?.cartOpen
})

const mapDispatchToProps = {
  cartOpenClose: ()=>cartOpenCloseAction()
}

export default connect(mapStateToProps, mapDispatchToProps)( App );
