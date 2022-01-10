import React, {useState} from 'react';
import App from "../../Layouts/App";
import Pagination from "../../Components/Pagination";
import Dialog from "../../Components/Dialog";
import useDialog from "../../Hooks/useDialog"
import {Inertia} from "@inertiajs/inertia";
import FormUser from "../../Components/FormUser";
import {useForm} from "@inertiajs/inertia-react";

export default function Index(props) {
    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    })
    // const  auth  = usePage().props;
    // console.log(auth)
    const {can_add_user} = props;
    const { data: users, links, from } = props.users
    console.log(props)
    console.log(users)
    const [addModalButton, closeModalAddUser ,modalAddUser] = useDialog()
    const [editModalButton, closeModalEditUser ,modalEditUser] = useDialog()
    const [destroyModalButton, closeModalDestroyUser ,modalDestroyUser] = useDialog()
    const onChange = (e) => setData({...data, [e.target.id]: e.target.value})
    const openEditDialog = (user) => {
        setData(user)
        editModalButton()
    }
    const destroyDialogHandler = (user) => {
        setData(user)
        destroyModalButton()
    }
    const destroyUser = () => {
        Inertia.delete(route('users.destroy', data.id), {
            onSuccess: closeModalDestroyUser()
        })
    }
    const storeHandler = (e) => {
        e.preventDefault()
        post(route('users.store'), {
            data,
            onSuccess: () => {
                reset(), closeModalAddUser()
            },
        })
    }
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('users.update', data.id), {
            data,
            onSuccess: () => {
                reset(), closeModalEditUser()
            },
        })
    }

    return (
        <div className="container">
            <Dialog trigger={modalAddUser} title="Add User">
                <FormUser {...{errors, data, submitLabel:'Create', submit:storeHandler, onChange}}/>
            </Dialog>
            <Dialog trigger={modalEditUser} title={`Edit User : ${data.name}`}>
                <FormUser {...{errors, data, submitLabel:'Update', submit:updateHandler, onChange}}/>
            </Dialog>
            <Dialog trigger={modalDestroyUser} title={`Delete User : ${data.name}`}>
                <p>Are you sure want delete this user?</p>
                <button onClick={destroyUser} className="btn btn-danger">Delete</button>
            </Dialog>
            {can_add_user ?
                <button onClick={addModalButton} className="btn btn-primary">
                    Add
                </button>
            : ''
            }
            <div className="card mt-3">
                <div className="card-header">Users</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{from + index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(user)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => destroyDialogHandler(user)}>Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={links} />
                </div>
            </div>
        </div>
    )
}

Index.layout = (page) => <App children={page} title="Users"/>
