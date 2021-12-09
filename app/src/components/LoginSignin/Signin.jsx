import React from 'react'
import '../../css/Signin.scss'
import { Link } from 'react-router-dom'

export function Signin() {

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

    return (
        <div className="container-fluid fill-screen">
            <div className='white signin-form'>
                <div className="row">
                    <div className="col s12">
                        <h3 className='primary center'>Signin</h3>
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
                                <button className='btn primary cbtn'>Sign in</button>
                            </div>
                            <div className="col s12">
                                <p>
                                    Do you have an account? <Link to='/login' className='btn-flat'>Log in</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
