import React, { useEffect, useState} from 'react'
import NhpListTableName from './Nhp_components/NhpListTableName'
import axios from './Nhp_apis/Nhp-2210900117'
import NhpFormTableName from './Nhp_components/NhpFormTableName'


export default function NhpApp() {
  
  // doc du lieu tu api
  const [nhpListTableName,setNhpListTableName] = useState([])
  const nhpGetTableName = async ()=>{
    console.log("App 11223List:");
    let nhpResp = await axios.get("https://6693d162c6be000fa07d4c06.mockapi.io/NhpApi/2210900117/NhpTableName")
    setNhpListTableName(nhpResp.data)
  }
    
  

    useEffect(()=>{
      nhpGetTableName()
    },[])

    // Ham xoa
    const nhpHandleDelete = async (nhpID) => {
      await axios.delete("https://6693d162c6be000fa07d4c06.mockapi.io/NhpApi/2210900117/NhpTableName/" + nhpID);
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
  
   const nhpHandleEdit1 = async (nhpObjTableName)=>{
    console.log('aaa', nhpObjTableName)
    await axios.put("https://6693d162c6be000fa07d4c06.mockapi.io/NhpApi/2210900117/NhpTableName/" + nhpObjTableName.nhpID, nhpObjTableName);
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
