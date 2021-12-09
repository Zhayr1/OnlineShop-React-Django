import React from 'react'
import { Link } from "react-router-dom";

export function CategoryBar() {
    return (
        <div className="container-fluid primary-light">
            <div className='container primary'>
                <div className="">
                    <Link className='btn-flat white-text' to="/products">
                        <i className="material-icons icon">shop</i>Products
                    </Link>
                </div>
            </div>
        </div>
    )
}
