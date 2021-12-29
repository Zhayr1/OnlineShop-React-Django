import React, { useEffect } from 'react'
import axiosInstance from '../../axiosApi'
import { CartItem } from './CartItem'

export function Cart() {

    const [cartItems, setCartItems] = React.useState()
    const [totalToPay, setTotalToPay] = React.useState(0)

    const getCartItems = () => {
        axiosInstance.get('cart/list/')
            .then(response => {
                setCartItems(response.data)
                console.log(cartItems);
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getCartItems()
    }, [])

    if (cartItems && totalToPay === 0) {
        let total = 0
        cartItems.map(item => {
            // console.log('current Total: '+ totalToPay + 'value to sum: '+ (item.product.price * item.quantity) );
            total += (item.product.price * item.quantity)
        })
        setTotalToPay(total)
    }

    return (
        <div className='container white fill-screen'>
            <div className="row">
                <div className="col s12 m8">

                    {cartItems ?
                        cartItems.map(item => (
                            <CartItem product={item.product} quantity={item.quantity} key={item.id+item.product.name} />
                        ))
                        :
                        'no hay items'
                    }
                </div>
                <div className="col s12 m4 grey checkoutContainer">
                    <div className="row p3">
                        <div className="col s12 white">
                            <h5>Order Summary</h5>
                            <hr />
                            <div className="row">
                                <div className="col s6">
                                    Subtotal:
                                </div>
                                <div className="col s6 right-align">
                                        ${totalToPay}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    Shipping:
                                </div>
                                <div className="col s6 right-align red-text">
                                        FREE
                                </div>
                            </div>
                            {/* <p> */}
                                {/* {cartItems ? cartItems.length : 0} items in cart. Total to pay: ${totalToPay} */}
                            {/* </p> */}
                            <div className="row">
                                <div className="col s6">
                                    <h5>Total:</h5>
                                </div>
                                <div className="col s6 right-align">
                                    <h5>${totalToPay}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
