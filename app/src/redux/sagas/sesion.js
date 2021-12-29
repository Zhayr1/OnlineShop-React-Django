import { put, call, takeLatest } from 'redux-saga/effects'
import {
    START_USER_LOGIN,
    SUCCESS_USER_LOGIN,
    ERROR_USER_LOGIN,
    START_USER_LOGOUT,
    SUCCESS_USER_LOGOUT,
    START_USER_SIGNIN,
    SUCCESS_USER_SIGNIN,
    // USER_IS_AUTHENTICATED,
    FAILED_USER_SIGNIN
} from '../actions/sesion'
import { axiosApiCall } from '../api'
import axiosInstance from '../../axiosApi'

function* startUserSignin({ payload }) {
    try {
       const response = yield call(axiosApiCall, 'post', 'users/auth/user/create/',{
           email: payload.email,
           password: payload.password
       })
       if(response.status === 201){
           yield put({ type: SUCCESS_USER_SIGNIN, payload: response.data.email})
        //    yield put({ type: USER_IS_AUTHENTICATED, payload: true })
       }else{
           yield put({type: FAILED_USER_SIGNIN, payload: response.error})
       }
    } catch (error) {
        
    }
}

function* startUserLogin({ payload }) {
    try {
        const response = yield call(axiosApiCall, 'post', 'users/auth/token/obtain/', { email: payload.email, password: payload.password })
        // const payload = response.results
        // console.log('Response: ' + JSON.stringify(response));
        // console.log('response status === 200: ' + (response.status === 200));
        if (response.status === 200) {
            const res = response
            yield put({ type: SUCCESS_USER_LOGIN, payload: res })
        } else {
            const res = response
            yield put({ type: ERROR_USER_LOGIN, payload: res })
        }
    } catch (err) {
        console.log(err)
    }
}

function* startUserLogout({ payload }) {
    try {
        const response = yield call(axiosApiCall, 'post', 'users/auth/token/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        })
        // console.log(JSON.stringify(response));
        if(response.status === 205){
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            yield put({type: SUCCESS_USER_LOGOUT})
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* sesion() {
    yield takeLatest(START_USER_LOGIN, startUserLogin)
    yield takeLatest(START_USER_LOGOUT, startUserLogout)
    yield takeLatest(START_USER_SIGNIN, startUserSignin)
}