import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startUserLogout } from '../redux/actions/sesion'



export function UserBar() {

    const userIsAuthenticated = useSelector(state => state.userIsAuthenticated)

    const dispath = useDispatch()

    const handleLogout = () => {
        try {
            dispath(startUserLogout())
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="container-fluid primary white-text">
            <div className='container'>
                <div className="right-align">
                    <Link to='/' className='btn-flat white-text'><i className="material-icons icon">star</i>WishList</Link>
                    {userIsAuthenticated
                        ?
                        <React.Fragment>
                            <Link to='/' className='btn-flat white-text'><i className="material-icons icon">person</i>Account</Link>
                            <button className='btn-flat white-text' onClick={handleLogout}><i className="material-icons icon">exit_to_app</i>Logout</button>
                        </React.Fragment>
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
