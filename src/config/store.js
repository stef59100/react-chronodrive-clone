import { createStore, combineReducers } from 'redux';
import cartReducer from '../component/cart/reducer';
import productsReducer from '../component/product-listing/reducer';
import { reducer as formReducer } from 'redux-form'
import { loadState, saveState } from '../localStorage';



const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    form: formReducer
})
const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveState(store.getState());
})

export default store;