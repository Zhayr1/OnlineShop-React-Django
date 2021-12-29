import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../sagas/index'
import { SUCCESS_GET_PRODUCTS, SUCCESS_GET_PRODUCT } from '../actions/products'
import { 
    SUCCESS_USER_LOGIN,
    USER_IS_AUTHENTICATED, 
    SUCCESS_USER_LOGOUT, 
    SUCCESS_USER_SIGNIN, 
    FAILED_USER_SIGNIN,
    SET_USER_EMAIL
} from '../actions/sesion'
import axiosInstance from '../../axiosApi'

const initialState = {
    userEmail: '',
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
        case SUCCESS_USER_SIGNIN:
            return {
                ...state,
                userEmail: payload
            }
        case SET_USER_EMAIL:
            return {
                ...state,
                userEmail: payload
            }    
        case FAILED_USER_SIGNIN:
            return {
                ...state,
                signin_error: payload
            }        
        case SUCCESS_USER_LOGIN:
            try {
                axiosInstance.defaults.headers['Authorization'] = "JWT " + payload.data.access;
                localStorage.setItem('access_token', payload.data.access);
                localStorage.setItem('refresh_token', payload.data.refresh);
                return {
                    ...state,
                    userIsAuthenticated: true
                }     
            } catch (error) {
                return {
                    ...state
                }    
            }
        case SUCCESS_USER_LOGOUT:
            return {
                ...state,
                userIsAuthenticated: false
            }
        case USER_IS_AUTHENTICATED:
            return {
                ...state,
                userIsAuthenticated: payload
            }    
        default:
            return state    
    }
}

const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = {
        ...createStore(reducers,
            compose(
                applyMiddleware(sagaMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        ) 
    }
    sagaMiddleware.run(rootSaga)
    return store
}
