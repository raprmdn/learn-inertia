import React from 'react';
import {Head} from "@inertiajs/inertia-react"

export default function App({children, title}) {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Head title={`Dream Space | ${title}`}/>
            <div className="col-md-5">
                {children}
            </div>
        </div>
    )
}
