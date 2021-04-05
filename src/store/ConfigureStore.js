import { createStore, combineReducers } from 'redux';
import { productReducer } from '../reducers/productReducer';

const ConfigureStore = () => {
    const combineAllReducer = combineReducers({
        productReducer: productReducer
    })
    const store = createStore(combineAllReducer)
    return ( store );
}
 
export default ConfigureStore;