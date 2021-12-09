export const START_GET_PRODUCTS = 'START_GET_PRODUCTS'
export const SUCCESS_GET_PRODUCTS = 'SUCCESS_GET_PRODUCTS'
export const START_GET_PRODUCT = 'START_GET_PRODUCT'
export const SUCCESS_GET_PRODUCT = 'SUCCESS_GET_PRODUCT'

export const startGetProducts = payload => ({
    type: START_GET_PRODUCTS,
    ...payload
})

// const successGetProducts = payload => ({
//     type: SUCCESS_GET_PRODUCTS,
//     ...payload
// })

export const startGetProduct = payload => ({
    type: START_GET_PRODUCT,
    ...payload
})