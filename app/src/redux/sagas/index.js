import { all } from 'redux-saga/effects'
import products from './products'
import sesion from './sesion'


export default function* rootSaga(){
    yield all([
        products(),
        sesion()
    ])
}