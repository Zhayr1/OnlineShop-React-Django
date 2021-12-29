import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startUserLogin } from '../../redux/actions/sesion';

export function Login() {

    let navigate = useNavigate();

    const userIsAuthenticated = useSelector(state => state.userIsAuthenticated)
    const dispatch = useDispatch()

    useEffect(() => {
        if(userIsAuthenticated){
            navigate("/", { replace: true })
        }
    },[userIsAuthenticated])

    const [formValues, setFormValues] = React.useState({
        email: '',
        password: '',
    })

    const updateForm = (event) => {
        setFormValues({
            ...formValues,
            [event.target.id]: event.target.value
        })
    }

    const PerformLogin = (event) => {
        event.preventDefault();
        if (formValues.email === '' && formValues.password === ''){
            console.log('error');
            return null;
        }
        dispatch(startUserLogin({
            payload: {
                email:formValues.email, 
                password: formValues.password
            }
        }))
    }

    return (
        <div className="container-fluid fill-screen">
            <div className='white signin-form'>
                <div className="row">
                    <div className="col s12">
                        <h3 className='primary center'>Login</h3>
                    </div>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" onChange={updateForm} value={formValues.email} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" onChange={updateForm} value={formValues.password} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col 12">
                                <button className='btn primary cbtn' onClick={PerformLogin}>Log In</button>
                            </div>
                            <div className="col s12">
                                <p>
                                    Don't have an account? <Link to='/signin' className='btn-flat'>Sign in</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
