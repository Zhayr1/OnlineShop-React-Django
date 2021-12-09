import React from 'react'
import '../css/ProductCard.scss'

export function Card(props) {

    return (
        <div className={props.class}>
            <div className="card product-card z-depth-2 scale-btn">
                <div className="card-image ">
                    <img className='product-image' src={props.image} alt='Item preview'/>
                </div>
                <div className="card-content">
                    <p className='black-text'>{props.text}</p>
                    {props.old_price?
                    <i className ="old-price grey-text "><b>US ${props.old_price}</b></i>
                    :''
                    }
                    {props.old_price ?
                    <br/>:''
                    }
                    <i className ="black-text"><b>US ${props.price}</b></i>
                </div>
            </div>
        </div>
    )
}
