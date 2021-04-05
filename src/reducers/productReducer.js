const initialState = {
    productData: null,
    cartData: [],
    cartOpen: false,
    shopData: [],
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type){
        case "STORE_PRODUCT_DATA_TO_STORE":
            return { ...state, productData: payload, shopData: payload}

        case "ADD_PRODUCT_TO_CART":
            if(state.cartData?.length > 0){
                let index = state.cartData?.findIndex(x => x.id === payload.id);
                if(index >= 0){
                    state.cartData[index].count = state.cartData[index].count + 1;
                    return {...state, cartData: [...state.cartData]}
                    // return {
                    //     ...state, count:[ ...state.cartData[index].count , state.cartData[index].count+1]
                    // }
                }
                else{
                    return { 
                        ...state, cartData: [...state.cartData, payload] }
                }
            }
            else{
                return { 
                      ...state, cartData: [...state.cartData, payload]
                    }
            }
        case "REMOVE_FROM_CART":
            for(let i=0;i<state.cartData.length;i++){
                if(state.cartData[i].id===payload){
                    state.cartData.splice(i,1)
                }
            }
            return { ...state, cartData:[...state.cartData]}
            // return { ...state, cartData: payload }
        case "CLEAR_CART_DATA":
            return initialState;
        case "CART_OPEN_CLOSE":
            return { ...state, cartOpen : !state.cartOpen  }
        case "SHOP_DATA_FILTER":
            console.log("pred",payload)
            let tempData;
            if(payload === 'accessories'){
                tempData = state.productData?.filter(x => x.isAccessory === true);
            }
            else if(payload === 'clothings'){
                tempData = state.productData?.filter(x => x.isAccessory === false);
            }
            else{
                tempData = state.productData
            }
            return { ...state, shopData: tempData}
        default:
            return state

    }
}