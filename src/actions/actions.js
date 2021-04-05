export const storeProductsDataAction = (payload) => ({
    type: "STORE_PRODUCT_DATA_TO_STORE",
    payload
})

export const addProductToCartAction = (payload) => ({
    type: "ADD_PRODUCT_TO_CART",
    payload
})

export const removeFromCartAction = (payload) => ({
    type: "REMOVE_FROM_CART",
    payload
})

export const clearCartDataAction = (payload) => ({
    type: "CLEAR_CART_DATA",
    payload
})

export const cartOpenCloseAction = (payload) => ({
    type: "CART_OPEN_CLOSE",
    payload
})

export const shopDataAction = (payload) => ({
    type: "SHOP_DATA_FILTER",
    payload
})