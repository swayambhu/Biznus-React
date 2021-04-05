import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingSection from '../LandingSection/LandingSection';
import home_landing_picture from '../assets/home_landing_picture.jpg';
import './Home.css';
import CustomSection from '../CustomSection/CustomSection';
import SupportCard from '../SupportCard/SupportCard';
import Circle from '../assets/circle.svg';
import Triangle from '../assets/triangle.svg';
import Rectangle from '../assets/rectangle.svg'; 
import HomeMiddleWallpaper from '../assets/home_middle_wallpaper.jpg';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Footer/Footer';
import axios from "axios";
import { connect } from 'react-redux';
import { storeProductsDataAction } from '../actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productData: [],
            loader: true,
         }
    }

    componentDidMount(){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res => this.props.storeProductsData(res.data));
    }


    // componentDidUpdate(newProps){
    //     if(newProps.productData !== this.props.productData){
    //         this.setState({productData: newProps.productData})
    //     }
    // }

    render() {
        return ( 
            <>
                <LandingSection 
                    imgLink={home_landing_picture}
                    paddingLeft="6%"
                    paddingTop="6%"
                    marginTop="135px"
                >
                    <h1 className="home_landing_title">Serving you since 1989.</h1>
                    <p className="home_landing_description">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                    <Link to="/shop" className="home_landing_btn">Shop Merch</Link>
                </LandingSection>
                <CustomSection>
                    <div className="support_top_detail_wrapper">
                        <div className="support_top_detail_left_wrapper">
                            <p>WAYS TO SUPPORT</p>
                            <h2>Support Acme Outdoors.</h2>
                        </div>
                        <div className="support_top_detail_right_wrapper">COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.</div>
                    </div>
                    <div className="support_cards_wrapper">
                        <SupportCard
                            cardNo="01"
                            name="shop products"
                            imgLink={Circle}
                            alt="circle image"
                            description="Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!"
                        />
                        <SupportCard
                            cardNo="02"
                            name="donate"
                            imgLink={Triangle}
                            alt="triangle image"
                            description="Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat."
                        />
                        <SupportCard
                            cardNo="03"
                            name="buy gift cards"
                            imgLink={Rectangle}
                            alt="rectangle image"
                            description="Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family."
                        />
                    </div>
                </CustomSection>
                <LandingSection
                    imgLink={HomeMiddleWallpaper}
                    marginTop="40px"
                >
                    <div className="safe_section_wrapper">
                        <h1 className="home_safe_title">How we're keeping you safe during COVID-19</h1>
                        <p className="home_safe_description">As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</p>
                        <Link to='/covid_alert' className="home_landing_btn">Read Our Statement</Link>
                    </div>
                </LandingSection>
                <CustomSection>
                    <div className="home_product_title">
                        <p>SHOP PRODUCTS</p>
                        <h2>Open 24/7/365.</h2>
                    </div>
                    <div className="home_product_card_holder">
                        {
                            this.props?.productData?.map( (data,index) => {
                                if(index < 3){
                                    return <ProductCard data={data} key={index} />
                                }
                            })
                               
                        }
                    </div>
                    <div>
                        <Link to='/shop' className="view_all_btn" >View All Products</Link>
                    </div>
                </CustomSection>
                <CustomSection>
                    <div className="shop_local_container">
                        <div className="shop_local_img"></div>
                        <div className="shop_local_description">
                            <div className="shop_local_desc_inner_wrapper">
                                <h2>Shop Local.</h2>
                                <p>
                                    We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.
                                    <br />
                                    <br />
                                    That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.
                                    <br />
                                    <br />
                                    But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.
                                    <br />
                                    <br />
                                    -------
                                    <br />
                                    <br />
                                    Jane & John Doe
                                    <br />
                                    Acme Outdoors
                                </p>
                            </div>
                        </div>
                    </div>
                </CustomSection>
                <Footer />
            </>
         );
    }
}

const mapStateToProps = (globalStore) => ({
    productData: globalStore?.productReducer?.productData
})

const mapDispatchToProps = {
    storeProductsData : (data) =>storeProductsDataAction(data)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);