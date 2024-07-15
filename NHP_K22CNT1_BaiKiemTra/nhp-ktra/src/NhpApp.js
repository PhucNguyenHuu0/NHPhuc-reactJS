import { useState, useEffect } from 'react';
import React from 'react';
import axios from '../src/Api/nhpapi';
import NhpSinhVienList from './components/NhpSinhVienList';
import NhpSinhVienAddOrEdit from './components/NhpSinhVienAddOrEdit';

const NhpApp = () => {
  const [nhpSinhVienList, setNhpSinhVienList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);

  // doc du lieu tu api
  const nhpGetAllStudent = async () => {
    const nhpResponse = await axios.get("NhpSinhVien");
    console.log("Api Data:", nhpResponse.data);
    setNhpSinhVienList(nhpResponse.data);
  };

  useEffect(() => {
    nhpGetAllStudent();
    console.log("Day la State Data:", nhpSinhVienList);
  }, []);

  const [nhpSinhVienAddOrEdit, setNhpSinhVienAddOrEdit] = useState(false);
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
  };

  const [nhpStudent, setNhpStudent] = useState(nhpInitStudent);

  const NhpHandleSubmit = (nhpParam) => {
    console.log("App:", nhpParam);

    if (isEdit) {
      const updatedData = nhpSinhVienList.map((element) => {
        if (element.NhpMaSV === nhpParam.NhpMaSV) {
          return {
            NhpHoSV: nhpParam.NhpHoSV,
            NhpTenSV: nhpParam.NhpTenSV,
            NhpPhai: nhpParam.NhpPhai,
            NhpNgaySinh: nhpParam.NhpNgaySinh,
            NhpNoiSinh: nhpParam.NhpNoiSinh,
            NhpMaKH: nhpParam.NhpMaKH,
            NhpHocBong: nhpParam.NhpHocBong,
            NhpDiemTrungBinh: nhpParam.NhpDiemTrungBinh,
            NhpMaSV: nhpParam.NhpMaSV,
          }; // Update the element with the new data
        }
        return element; // Return the original element for other IDs
      });
      setNhpSinhVienList(updatedData);
      setIsEdit(false);
      setStudentToEdit(null);
    } else {
      setNhpSinhVienList(prev => [
        ...prev,
        nhpParam
      ]);
    }
  }
  const removeItem = (MaSv) => {
    console.log("MaSv:", MaSv);

    const updatedData = NhpSinhVienList.filter((element) => element.NhpMaSV !== MaSv);
    setNhpSinhVienList(updatedData)
   }
   const editItem = (NhpSinhVien) => {
    console.log("NhpSinhVien:", NhpSinhVien);
    setStudentToEdit(NhpSinhVien)
    setIsEdit(true)
   }

  //Ham xu ly them moi
  const nhpHandleAddNew = () => {
    setNhpSinhVienAddOrEdit(true);
    setStudentToEdit(null);
    setIsEdit(false);
  };

  const nhpHandleClose = (param) => {
    setNhpSinhVienAddOrEdit(param);
  };

  const nhpHandleSubmit = (param) => {
    nhpGetAllStudent();
    setNhpSinhVienAddOrEdit(param);
  };

  const nhpHandleDelete = () => {
    nhpGetAllStudent();
  };

  const nhpHandleEdit = (student) => {
    setStudentToEdit(student);
    setIsEdit(true);
    setNhpSinhVienAddOrEdit(true);
  };

  let nhpElementForm = nhpSinhVienAddOrEdit === true ? (
    <NhpSinhVienAddOrEdit
      renderStudent={isEdit ? studentToEdit : nhpInitStudent}
      onNhpClose={nhpHandleClose}
      onNhpSubmitForm={nhpHandleSubmit}
      isEdit={isEdit}
    />
  ) : null;

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <NhpSinhVienList
        renderNhpSinhVienList={nhpSinhVienList}
        onNhpDelete={nhpHandleDelete}
        onNhpEdit={nhpHandleEdit}
      />
      <button className='btn btn-primary' onClick={nhpHandleAddNew}>
        Them moi
      </button>
      <hr />
      {nhpElementForm}
    </div>
  );
};

export default NhpApp;
