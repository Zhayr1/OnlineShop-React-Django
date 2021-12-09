import React from 'react'
import { Filter } from '../Utils/Filter'
import {Card} from '../Card'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export function CASSection() {

    const products = useSelector(state => state.products)

    return (
        <div className="container white fill-screen">
            <div className="row">
                <Filter />
            </div>
                <div className="divider"/>
            <div className="row mt3 flex">
                {products.map(p => (
                            <Link key={p.id} to={`/products/${p.id}`} className='product-card-container'>
                            <Card image={p.image}
                            price={p.price} text={p.name} class='product-card-container' />
                            </Link>
                            ))}
            </div>
        </div>
    )
}
