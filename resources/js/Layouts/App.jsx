import React from 'react';
import Navbar from "../Components/Navbar";
import {Head, usePage} from "@inertiajs/inertia-react"
import {toast, Toaster} from "react-hot-toast";

export default function App({children, title}) {
    const { flash } = usePage().props;
    flash.type && toast[flash.type](flash.message)
    return (
        <div>
            <Head title={title}/>
            <Navbar/>
            <div className="pt-5">
                {flash.type && <Toaster position="top-right"/>}
                {children}
            </div>
        </div>
    )
}
