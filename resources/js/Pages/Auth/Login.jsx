import React from 'react';
import Guest from "../../Layouts/Guest";
import {Link, useForm} from "@inertiajs/inertia-react";

export default function Login({errors}) {
    const { data, setData, post } = useForm({
        email: '',
        password: '',
        remember: false
    });
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        post('/login', data)
    }

    // const [values, setValues] = useState({
    //     email: '',
    //     password: '',
    //     remember: false
    // })
    // const changeHandler = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.id]: e.target.value
    //     })
    // }
    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     Inertia.post('/login', data)
    // }
    return (
        <div className="card">
            <div className="card-header">
                Login
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler} noValidate>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={data.email} onChange={changeHandler}
                               type="email" name="email" id="email" className="form-control"/>
                        { errors && (<small className="text-danger">{errors.email}</small>) }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Email</label>
                        <input value={data.password} onChange={changeHandler}
                            type="password" name="password" id="password" className="form-control"/>
                        { errors && (<small className="text-danger">{errors.password}</small>) }
                    </div>
                    <div className="form-check mb-3">
                        <input value={data.remember}
                               onChange={(e) => setData({...data, remember:e.target.checked})}
                            type="checkbox" className="form-check-input" name="remember" id="remember"/>
                        <label htmlFor="Remember" className="form-check-label">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            <div className="card-footer">
                <Link className="link-dark text-decoration-none" href="/register">Register</Link>
            </div>
        </div>
    )
}

Login.layout = (page) => <Guest children={page}/>
