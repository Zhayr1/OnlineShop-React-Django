export const START_USER_LOGIN = 'START_USER_LOGIN'
export const SUCCESS_USER_LOGIN = 'SUCCESS_USER_LOGIN'
export const ERROR_USER_LOGIN = 'ERROR_USER_LOGIN'
export const USER_IS_AUTHENTICATED = 'USER_IS_AUTHENTICATED'
export const START_USER_LOGOUT = 'START_USER_LOGOUT'
export const SUCCESS_USER_LOGOUT = 'SUCCESS_USER_LOGOUT'
export const START_USER_SIGNIN = 'START_USER_SIGNIN'
export const SUCCESS_USER_SIGNIN = 'SUCCESS_USER_SIGNIN'
export const FAILED_USER_SIGNIN = 'FAILED_USER_SIGNIN'
export const SET_USER_EMAIL = 'SET_USER_EMAIL'

export const startUserSignin = payload => ({
    type: START_USER_SIGNIN,
    ...payload
})

export const failedUserSignin = payload => ({
    type: FAILED_USER_SIGNIN,
    ...payload
})

export const startUserLogin = payload => ({
    type: START_USER_LOGIN,
    ...payload
})

export const startUserLogout = payload => ({
    type: START_USER_LOGOUT,
})

export const userIsAuthenticated = payload => ({
    type: USER_IS_AUTHENTICATED,
    ...payload
})

export const setUserEmail = payload => ({
    type: SET_USER_EMAIL,
    ...payload
})
// export const startGetProducts = payload => ({
    // type: START_GET_PRODUCTS,
    // ...payload
// })

// export const startGetProducts = payload => ({
    // type: START_GET_PRODUCTS,
    // ...payload
// })