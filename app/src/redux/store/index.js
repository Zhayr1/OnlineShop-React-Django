import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../sagas/index'
import { SUCCESS_GET_PRODUCTS, SUCCESS_GET_PRODUCT } from '../actions/products'

const initialState = {
    products: [],
    current_product: null,
    productIsLoading: true,
    userIsAuthenticated: false
}

function reducers(state=initialState,action) {
    const payload = action.payload
    // console.log(payload);
    switch(action.type){
        case SUCCESS_GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case SUCCESS_GET_PRODUCT:
            return {
                ...state,
                current_product: payload,
                productIsLoading: false
            }     
        default:
            return state    
    }
}

const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = {
        ...createStore(reducers, applyMiddleware(sagaMiddleware))
    }
    sagaMiddleware.run(rootSaga)
    return store
}
