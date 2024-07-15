import React, { useEffect, useState} from 'react'
import NhpListTableName from './Nhp_components/NhpListTableName'
import axios from './Nhp_apis/Nhp-2210900117'
import NhpFormTableName from './Nhp_components/NhpFormTableName'


export default function NhpApp() {
  
  // doc du lieu tu api
  const [nhpListTableName,setNhpListTableName] = useState([])
  const nhpGetTableName = async ()=>{
    let nhpResp = await axios.get("NhpTableName")
    console.log("App List:",nhpResp.data);
    setNhpListTableName(nhpResp.data)
  }
    
  

    useEffect(()=>{
      nhpGetTableName()
    },[])

    // Ham xoa
    const nhpHandleDelete = async (NhpID) => {
      await axios.delete("NhpTableName/" + NhpID);
      nhpGetTableName();
    };
    

  const  nhpObjTableName = { 
    "NhpTbName": "Phúc",
    "NhpTbEmail": "nguyenphuc10122003@gmail.com",
    "NhpTbPhone": "0398227601",
    "NhpTbStatus": true,
    "NhpID": "2210900117"
  };
  const [NhpTableName,setNhpTableName] = useState(nhpObjTableName);
  
   const nhpHandleEdit1 = ()=>{
    nhpGetTableName();
  }
  const nhpHandleEdit = (nhpObjEditTableName)=>{
    setNhpTableName(nhpObjEditTableName);
  }
  return (
    <div className='container border my-3'>
      <h1>Bai danh gia het hoc phan - Nguyen Huu Phuc: 2210900117</h1>
      <hr/>
      <NhpListTableName renderNhpListTableName = {nhpListTableName} onNhpDelete={nhpHandleDelete} onNhpEdit={nhpHandleEdit}/>
      <hr/>
      <NhpFormTableName renderNhpTableName = {NhpTableName} onNhpEdit={nhpHandleEdit1}/>
      
    </div>
  )
}
