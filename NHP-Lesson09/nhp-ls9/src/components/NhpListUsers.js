

import React from 'react'

export default function NhpListUsers({ renderNhpListUsers }) {
    console.log("NhpListUsers", renderNhpListUsers);

   

    // Render the list of users
    let NhpElementUser = renderNhpListUsers.map((NhpUser, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{NhpUser.id}</td>
                    <td>{NhpUser.UserName}</td>
                    <td>{NhpUser.Password}</td>
                    <td>{NhpUser.Email}</td>
                    <td>{NhpUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chuc Nang</th>
                    </thead>
                    <tbody>
                        {NhpElementUser}
                    </tbody>
                </table>
            </div>
        </div>
    )
}