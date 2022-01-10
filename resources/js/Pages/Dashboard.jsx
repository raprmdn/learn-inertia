import React from 'react';
import App from "../Layouts/App";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard() {
    return (
        <div>
            <Head title="Dashboard"/>
            <div className="container">
                <div className="card">
                    <div className="card-header">Dashboard</div>
                    <div className="card-body">Your Dashboard</div>
                </div>
            </div>
        </div>
    )
}

Dashboard.layout = (page) => <App children={page}/>
