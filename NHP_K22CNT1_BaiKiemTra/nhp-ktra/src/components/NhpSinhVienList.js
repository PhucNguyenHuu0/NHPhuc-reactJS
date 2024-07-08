import React from 'react'
import axios from '../Api/nhpapi'

export default function NhpSinhVienList({ renderNhpSinhVienList, onNhpDelete  }) {
    console.log("NhpSinhVienList:", renderNhpSinhVienList);


    // Check if renderNhpListUsers is an array
    if (!Array.isArray(renderNhpSinhVienList)) {
        return <div>No data available</div>;
    }
    
    const NhpHandleDelete = async (param) => {
        if(window.confirm("Ban co muon xoa khong?")){
            const nhpRes = axios.delete("NhpSinhVien/"+param.MaSV);
        }
        onNhpDelete();
    }
    // Render the list of users
    let nhpElementStudent = renderNhpSinhVienList.map((NhpSinhVien, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{NhpSinhVien.NhpMaSV}</td>
                    <td>{NhpSinhVien.NhpHoSV}</td>
                    <td>{NhpSinhVien.NhpTenSV}</td>
                    <td>{NhpSinhVien.NhpPhai}</td>
                    <td>{NhpSinhVien.NhpNgaySinh}</td>
                    <td>{NhpSinhVien.NhpNoiSinh}</td>
                    <td>{NhpSinhVien.NhpMaKH}</td>
                    <td>{NhpSinhVien.NhpHocBong}</td>
                    <td>{NhpSinhVien.NhpDiemTrungBinh}</td>
                    <td>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger' onClick={NhpHandleDelete}>Remove</button>
                    </td>
                </tr>
            </>
        )
    })

    

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <th>MaSV</th>
                        <th>HoSV</th>
                        <th>TenSV</th>
                        <th>NhpPhai</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                        <th>Chuc Nang</th>
                    </thead>
                    <tbody>
                        {nhpElementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    )
}