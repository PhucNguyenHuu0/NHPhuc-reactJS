import axios from '../Nhp_apis/Nhp-2210900117'
import React, { useEffect, useState } from 'react'

export default function NhpFormTableName({renderNhpTableName , onNhpEdit}) {

    const [nhpID,setNhpID] = useState(renderNhpTableName.NhpID)
    const [nhpTbName,setNhpTbName] = useState(renderNhpTableName.NhpTbName)
    const [nhpTbEmail,setNhpTbEmail] = useState(renderNhpTableName.NhpTbEmail)
    const [nhpTbPhone,setNhpTbPhone] = useState(renderNhpTableName.NhpTbPhone)
    const [nhpTbStatus,setNhpTbStatus] = useState(renderNhpTableName.NhpTbStatus)

    useEffect(()=>{
        setNhpID(renderNhpTableName.NhpID)
        setNhpTbName(renderNhpTableName.NhpTbName)
        setNhpTbEmail(renderNhpTableName.NhpTbEmail)
        setNhpTbPhone(renderNhpTableName.NhpTbPhone)
        setNhpTbStatus(renderNhpTableName.NhpTbStatus)
    },[renderNhpTableName])
    const nhpHandleSubmit = async (nhpEvent)=>{
        nhpEvent.preventDefault();
        const nhpObjTableName = {
            "nhpTbName": nhpTbName,
            "nhpTbEmail": nhpTbEmail,
            "nhpTbPhone": nhpTbPhone,
            "nhpTbStatus": nhpTbStatus,
            "nhpID": nhpID          
        }
        console.log(nhpObjTableName);

        //thêm vào dữ liệu trong api
        await axios.put("NhpTableName/"+nhpObjTableName.nhpID,nhpObjTableName);
        onNhpEdit();
    }
  return (
    <div>
        <h2>Form xử lý dữ liệu thông tin</h2>
        <form>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ntqId">NhpID</span>
            <input type="text" className="form-control" placeholder="Id" 
            name='NhpID'
            value={nhpID}
            onChange={(nhpEv)=>setNhpID(nhpEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>
        
        <div class="input-group mb-3">
            <span className="input-group-text" id="NhpTbName">NhpTbName</span>
            <input type="text" className="form-control" placeholder="Name" 
            name='NhpTbName'
            value={nhpTbName}
            onChange={(nhpEv)=>setNhpTbName(nhpEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span className="input-group-text" id="NhpTbEmail">NhpTbEmail</span>
            <input type="text" className="form-control" placeholder="nguyenphuc10122003@gmail.com" 
            name='NhpTbEmail'
            value={nhpTbEmail}
            onChange={(nhpEv)=>setNhpTbEmail(nhpEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span className="input-group-text" id="NhpTbPhone">NhpTbPhone</span>
            <input type="text" className="form-control" placeholder="0398227601" 
            name='NhpTbPhone'
            value={nhpTbPhone}
            onChange={(nhpEv)=>setNhpTbPhone(nhpEv.target.value)}
            aria-label="Username" 
            aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <span className="input-group-text" id="NhpTbStatus">NhpTbStatus</span>
            <select type="text" id='NhpTbStatus' className="form-control" 
            name='NhpTbStatus'
            value={nhpTbStatus} 
            onChange={(nhpEv)=>setNhpTbStatus(nhpEv.target.value)}>
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
        </div>

        <button className="btn btn-primary my-3" name='btnNhpSave' onClick={nhpHandleSubmit}>Save</button>

        </form>
    </div>
  )
}