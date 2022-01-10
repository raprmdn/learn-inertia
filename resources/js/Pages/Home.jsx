import React from 'react';
import App from "../Layouts/App";
import {Head} from "@inertiajs/inertia-react";

export default function Home(props) {
    return (
        <div>
            <Head title="Home"/>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        {props.username}
                    </div>
                    <div className="card-body">
                        Your inertia App.
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.layout = (page) => <App children={page}/>
