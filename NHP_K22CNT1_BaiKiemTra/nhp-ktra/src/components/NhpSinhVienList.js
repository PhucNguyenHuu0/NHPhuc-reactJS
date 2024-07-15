import React from 'react'
import axios from '../Api/nhpapi'

export default function NhpSinhVienList({ renderNhpSinhVienList, onNhpDelete, removeItem, editItem }) {
    console.log("NhpSinhVienList:", renderNhpSinhVienList);


    // Check if renderNhpListUsers is an array
    if (!Array.isArray(renderNhpSinhVienList)) {
        return <div>No data available</div>;
    }
    
    const nhpHandleDelete = async (MaSV) => {
        if (window.confirm("Ban co muon xoa khong?")) {
            try {
                await axios.delete(`NhpSinhVien/${MaSV}`);
                onNhpDelete(); // Notify the parent component about the deletion
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
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
                    <button className='btn btn-success' onClick={() => editItem(NhpSinhVien)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => removeItem(NhpSinhVien.NhpMaSV)}>Remove</button>
                    </td>
                </tr>
            </>
        )
    })

    

    return (
        <div className='row'>
            <h2>Danh sach SinhVien</h2>
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