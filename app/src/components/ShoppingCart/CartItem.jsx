import React from 'react'
import '../../css/CartItem.scss'

export function CartItem(props) {

    const product = props.product
    const quantity = props.quantity

    return (
        <div className='col s12 cartItemContaine' key={product.id}>
            <div className="row cartItemContainer">

                <div className="col s5 l2">
                    <img className='img-thumbnail' src={product.image} alt="cartItem" />
                </div>
                <div className="col s5 l7">
                    <div className="row">
                        <div className="col s12 cartItemName">
                            {product.name}
                        </div>
                        <div className="col s1">
                            ${product.price}
                        </div>
                        <div className="col s12">
                            {quantity > 1 ?
                                <small>
                                    {quantity + ' units'}
                                </small> :
                                <small>
                                    {quantity + ' unit'}
                                </small>
                            }
                        </div>
                    </div>
                </div>
                <div className="col s2 l3">
                    <div className="row">
                        <div className="col s12 right-align">
                            <p>{quantity} X ${product.price}</p>
                        </div>
                        <div className="col s12">
                            <p className='priceText right-align'>
                                Total: ${product.price * quantity}
                            </p>
                        </div>
                        <div className="col s12 right-align">
                            {/* <button className='removeItemBtn'>Remove Item</button> */}
                            <p className=''>
                                <span className='removeItemButton'>
                                    Remove
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
