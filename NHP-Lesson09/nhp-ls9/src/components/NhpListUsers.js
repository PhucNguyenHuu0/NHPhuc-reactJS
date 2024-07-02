import React from 'react'
import axios from '../api/NhpApi'
export default function NhpListUsers({renderNhpListUsers, onNhpDelete}) {
    console.log("NhpListUsers:",renderNhpListUsers);
    // hiener thi đữ liệu
    let nhpElementUser = renderNhpListUsers.map((nhpUser,index)=>{
        return(
                <tr key={index}>
                    <td>{nhpUser.id}</td>
                    <td>{nhpUser.UserName}</td>
                    <td>{nhpUser.Password}</td>
                    <td>{nhpUser.Email}</td>
                    <td>{nhpUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>nhpHandleDelete(nhpUser)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const nhpHandleDelete = async (param) => {
        if (window.confirm('Bạn có muốn xóa thật không?')) {
            await axios.delete("nhpUsers/" + param.id);
        }
        onNhpDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {nhpElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
