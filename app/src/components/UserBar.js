import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export function UserBar() {

    const userIsAuthenticated = useSelector(state => state.userIsAuthenticated)

    return (
        <div className="container-fluid primary white-text">
            <div className='container'>
                <div className="right-align">
                    <Link to='/' className='btn-flat white-text'><i className="material-icons icon">star</i>WishList</Link>
                    {userIsAuthenticated
                    ?
                    <Link to='/' className='btn-flat white-text'><i className="material-icons icon">person</i>Account</Link>
                    :
                    <React.Fragment>
                    <Link to='/login' className='btn-flat white-text'>Log In</Link>
                    <Link to='/signin' className='btn-flat white-text'>Sign In</Link>
                    </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}
