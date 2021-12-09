import { put, call, takeLatest } from 'redux-saga/effects'
import { START_GET_PRODUCTS, SUCCESS_GET_PRODUCTS, START_GET_PRODUCT, SUCCESS_GET_PRODUCT } from '../actions/products'
import apiCall from '../api'

function* getProducts({ payload }) {
    try {   
        const response = yield call(apiCall, 'get', 'http://127.0.0.1:8000/api/products/')
        // const payload = response.results
        const payload = response
        yield put({ type: SUCCESS_GET_PRODUCTS, payload})
    } catch (err) {
        console.log(err)
    }
}

function* getProduct({ payload }) {
    try {   
        const response = yield call(apiCall, 'get', 'http://127.0.0.1:8000/api/products/'+payload.id)
        const images = yield call(apiCall, 'get', 'http://127.0.0.1:8000/api/products/images/'+payload.id)
        const product = response
        product.images = images
        // console.log(product);
        yield put({ type: SUCCESS_GET_PRODUCT, payload: product})
    } catch (err) {
        console.log(err)
    }
}

export default function* products(){
    yield takeLatest(START_GET_PRODUCTS, getProducts)
    yield takeLatest(START_GET_PRODUCT, getProduct)
}