import React from 'react'
import '../../css/Signin.scss'
import { Link, useNavigate } from 'react-router-dom'
import { startUserSignin, setUserEmail } from '../../redux/actions/sesion'
import { useDispatch, useSelector } from 'react-redux'

export function Signin() {

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const userEmail = useSelector(state => state.userEmail)
    const userIsAuthenticated = useSelector(state => state.userIsAuthenticated)

    const [formResponse, setFormResponse] = React.useState('')

    React.useEffect(() => {
        if(userIsAuthenticated){
            navigate("/", { replace: true })
        }
        if(userEmail){
            setFormResponse(userEmail)
            dispatch(setUserEmail(''))
        }
    },[userIsAuthenticated, userEmail])

    const [auxState, setAuxState] = React.useState({})
    const [formValues, setFormValues] = React.useState({
        email: '',
        password: '',
        password2: ''
    })

    const updateForm = (event) => {
        setFormValues({
            ...formValues,
            [event.target.id]: event.target.value
        })
    }

    const PerformSignin = (event) => {
        event.preventDefault();
        if (formValues.email === '' && formValues.password === '' && formValues.password2 === '') {
            console.log('error');
            return null;
        }
        if (formValues.password === formValues.password2) {
            dispatch(startUserSignin({
                payload: {
                    email: formValues.email,
                    password: formValues.password
                }
            }))
        }
        setAuxState(formValues)
        setFormValues({
            email: '',
            password: '',
            password2: ''
        })
    }

    return (
        <div className="container-fluid fill-screen">

            <div className='white signin-form'>
                <div className="row">
                    <div className="col s12">
                        <h3 className='primary center'>Signin</h3>
                    </div>
                    <div className="col s12">
                        {
                            formResponse ?
                                <div className="col s12">
                                    <p className='teal-text'>
                                        User <span>{formResponse}</span> created successfully
                                    </p>
                                </div>
                                :
                                ''
                        }
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
                            <div className="input-field col s12">
                                <input id="password2" type="password" className="validate" onChange={updateForm} value={formValues.password2} />
                                <label htmlFor="password2">Re-Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col 12">
                                <button className='btn primary cbtn' onClick={PerformSignin} >Sign in</button>
                            </div>
                            <div className="col s12">
                                <p>
                                    Do you have an account? <Link to='/login' className='btn-flat'>Log in</Link>
                                </p>
                            </div>
                            {/* {userEmail ?
                                <div className="col s12 secondary">
                                <p className=''>
                                    User {userEmail} created successfully
                                </p>
                            </div>
                                :''
                            } */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
