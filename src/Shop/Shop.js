import React, { Component } from 'react';
import './Shop.css';
import CustomSection from '../CustomSection/CustomSection';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Footer/Footer';
import BlackBanner from '../BlackBanner/BlackBanner';
import { connect } from 'react-redux';
import { shopDataAction } from '../actions/actions';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            shopData: [],
            selected: 'all',
         }
    }

    // componentDidMount(){
    //     this.props.shopDataFilter(this.props.productData);
    // }

    shopByFilter=(data)=>{
        this.setState({selected: data});
        this.props.shopDataFilter(data);
    }

    render() { 
        return ( 
            <>
                <BlackBanner title="Shop Our Products" />
                <div className="feature_item_wrapper">
                    <div className="shop_feature_image"></div>
                    <div className="feature_item_detail_wrapper">
                        <h3>White Tent</h3>
                        <p>$ 200.00 USD</p>
                    </div>
                    <div className="feature_item_btn">Featured Item</div>
                </div>
                <CustomSection>
                    <div className="products_section">
                        <div className="prod_section_left">
                            <h2>Shop by Category</h2>
                            <ul className="category_list">
                                <li className={this.state.selected === 'accessories' ? "selected_filter_btn" : "filter_btn"} onClick={()=>this.shopByFilter ("accessories")}>Accessories</li>
                                <li className={this.state.selected === 'clothings' ? "selected_filter_btn" : "filter_btn"} onClick={()=>this.shopByFilter("clothings")} >Clothings</li>
                                <li className={this.state.selected === 'all' ? "selected_filter_btn" : "filter_btn"} onClick={()=>this.shopByFilter("all")} >Show All</li>
                            </ul>
                        </div>
                        <div className="products_container">
                        {
                            this.props?.shopData?.map((data,index)=>
                                <ProductCard data={data} key={index} />
                            )
                        }
                        </div>
                    </div>
                </CustomSection>
                <Footer />
            </>
         );
    }
}

const mapStateToProps = (globalStore) => ({
    productData: globalStore?.productReducer?.productData,
    shopData: globalStore?.productReducer?.shopData
})

const mapDispatchToProps = {
    // storeProductsData : (data) =>storeProductsDataAction(data),
    shopDataFilter: (data)=>shopDataAction(data)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);