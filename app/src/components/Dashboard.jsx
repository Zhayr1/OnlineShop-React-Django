import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { CategoryCard } from './CategoryCard'

export function Dashboard() {

    const discountProducts = useSelector(state => state.products)
    
    return (
        <div className='container white'>
            <div className="row">
                <div className='col s12'>
                    <h2 className='primary deal-text center'>Deals</h2>
                </div>
                <div className='col s12'>
                    <div className='row'>
                        {discountProducts.map(p => (
                            <Link key={p.id} to={`/products/${p.id}`} className='product-card-container'>
                            <Card image={p.image}
                            price={p.price} old_price="25.99" text={p.name} class='col s8 m4 l3 xl2' />
                            </Link>
                            ))}
                    </div>
                </div>
                <div className='col s12'>
                    <h2 className='primary deal-text center'>Categories</h2>
                </div>
                <div className='col s12'>
                    <div className='row'>
                        <CategoryCard link='/' class="col s12 m4" text="Clothes and Shoes" icon="local_grocery_store" />
                        <CategoryCard link='/' class="col s12 m4" text="Gaming" icon="videogame_asset" />
                        <CategoryCard link='/' class="col s12 m4" text="Electronic" icon="computer" />
                    </div>
                </div>
                <div className='col s12'>
                    <h2 className='primary deal-text center'>Recently Listed</h2>
                </div>
                <div className='col s12'>
                    <div className='row'>
                        {discountProducts.map(p => (
                            <Link key={p.id} to={`/products/${p.id}`} className='product-card-container'>
                            <Card image={p.image}
                            price={p.price} old_price="25.99" text={p.name} class='col s8 m4 l3 xl2' />
                            </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
