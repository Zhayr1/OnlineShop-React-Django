import React from 'react'
import { Link } from 'react-router-dom';
import { UserBar } from './UserBar';

export function Navbar() {
    return (
        <div className='navbar-container'>
            <UserBar />
            <div className="container-fluid primary z-depth-5">
                <div className='container'>
                    <div className='row valign-wrapper'>
                        <div className='col s3'>
                            <nav className='z-depth-0 primary'>
                                <Link to="/" className='brand-logo'>OnlineShop</Link>
                            </nav>
                        </div>
                        <div className="col s9 right-align">
                            <Link className='btn-flat white-text' to="/products">
                                <i className="material-icons icon">shop</i>Products
                            </Link>
                            <Link to='/cart' className='btn-flat white-text'><i className="material-icons icon">add_shopping_cart</i>Cart</Link>
                        </div>
                    </div>
                </div>
            </div >
            {/* <CategoryBar /> */}
        </div>
    )
}
