import React, { Component } from 'react';
import './ProductDetailsPage.css';
import BlackBanner from '../BlackBanner/BlackBanner';
import { connect } from 'react-redux';
import { addProductToCartAction } from '../actions/actions';
import Footer from '../Footer/Footer';


class ProductDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cardData: null
         }
    }

    componentDidMount(){
        this.props.productData?.filter(x => x.id === this.props.location.state).map(x =>this.setState({cardData:x}))
    }

    sendDataToStore=()=>{
        let tempCardData = this.state.cardData;
        tempCardData.count = 1;
        this.setState({cardData:tempCardData},()=>this.props.addToCard(this.state.cardData))
    }

    render() { 
        return ( 
            <>
                <BlackBanner title="White Tent"/>
                {
                    this.state?.cardData?  
                        <div className="product_details_container">
                            <img alt={this.state?.cardData?.name} src={this.state?.cardData.preview} />
                            <div className="product_detail_right">
                                <h2>{this.state?.cardData.name}</h2>
                                <p>{this.state?.cardData.description}</p>
                                <div className="preview_container">
                                {
                                    this.state?.cardData.photos.map((data,index)=>
                                        <div className="preview_img_wrapper">
                                            <img alt={"image"+index} src={data} key={index} />
                                        </div>
                                    )
                                }
                                </div>
                                <h2>{this.state?.cardData.brand}</h2>
                                <p>RS: {this.state?.cardData.price}</p>
                                <div className="count_and_btn_wrapper">
                                    <p>1</p>
                                    <div onClick={this.sendDataToStore}>Add To Cart</div>
                                </div>
                            </div>
                        </div>    
                        :
                        ""
                }
                <Footer />
            </> 
         );
    }
}

const mapStateToProps = (globalStore) => ({
    productData: globalStore?.productReducer?.productData
})

const mapDispatchToProps = {
    addToCard: (data)=>addProductToCartAction(data)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);