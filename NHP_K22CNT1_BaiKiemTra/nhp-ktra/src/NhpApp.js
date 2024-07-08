import { useState, useEffect } from 'react';
import React from 'react';
import axios from '../src/Api/nhpapi'
import NhpSinhVienList from './components/NhpSinhVienList'
import NhpSinhVienAddOrEdit from './components/NhpSinhVienAddOrEdit'


const NhpApp = () => {
  const [nhpSinhVienList, setNhpSinhVienList] = useState([]);

  // doc du lieu tu api
  const nhpGetAllStudent = async () => {
    const nhpResponse = await axios.get("NhpSinhVien");
    console.log("Api Data:", nhpResponse.data);
    setNhpSinhVienList(nhpResponse.data);
  }

  useEffect(() => {
    nhpGetAllStudent();
    console.log("Day la State Data:", NhpSinhVienList);
  }, []); 

  const [NhpSinhVienAddOrEdit, setNhpSinhVienAddOrEdit] = useState(false);
  const nhpInitStudent = {
    NhpHoSV: "Nguyen",
    NhpTenSV: "Huu Phuc",
    NhpPhai: true,
    NhpNgaySinh: 10122003,
    NhpNoiSinh: "Ha Noi",
    NhpMaKH: "CNT",
    NhpHocBong: "1",
    NhpDiemTrungBinh: "10",
    NhpMaSV: "2210900117"
  }

  const [nhpStudent, setNhpStudent] = useState(nhpInitStudent);
  //Ham xu ly them moi
  const nhpHandleAddNew = () => {
    setNhpSinhVienAddOrEdit(true);
  }

  const nhpHandleClose = (param) => {
    setNhpSinhVienAddOrEdit(param);
  }
  const nhpHandleSubmit = (param) => {
    nhpGetAllStudent();
    setNhpSinhVienAddOrEdit(param);
  }
  const NhpHandleDelete = () => {
    nhpGetAllStudent();
  };
  let nhpElementForm = NhpSinhVienAddOrEdit === true ? <NhpSinhVienAddOrEdit renderStudent={nhpStudent} onNhpClose={nhpHandleClose}
    onNhpSubmitForm={nhpHandleSubmit} /> : "";

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <NhpSinhVienList renderNhpSinhVienList={nhpSinhVienList} onNhpDelete={NhpHandleDelete} />
      <button className='btn btn-primary' onClick={nhpHandleAddNew}>Them moi</button>
      <hr />
      {nhpElementForm}
    </div>
  )
}

export default NhpApp;