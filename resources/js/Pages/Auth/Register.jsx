import React from 'react';
import Guest from "../../Layouts/Guest";
import {Link} from "@inertiajs/inertia-react";

export default function Register() {
    return (
        <div className="card">
            <div className="card-header">
                Register
            </div>
            <div className="card-body">
                Register Form
            </div>
            <div className="card-footer">
                <Link className="link-dark text-decoration-none" href="/login">Login</Link>
            </div>
        </div>
    )
}

Register.layout = (page) => <Guest children={page}/>
