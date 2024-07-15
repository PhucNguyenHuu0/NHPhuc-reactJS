import React from 'react'

export default function NhpListTableName({renderNhpListTableName,onNhpDelete, onNhpEdit}) {
  console.log("List:",renderNhpListTableName)
    //hien thi du lieu
    const NhpElementTableName = renderNhpListTableName.map((nhpItem, nhpIndex)=>{
        return(
            <tr key={nhpIndex}>
                <td>{nhpItem.nhpID}</td>
                <td>{nhpItem.NhpTbName}</td>
                <td>{nhpItem.NhpTbEmail}</td>
                <td>{nhpItem.NhpTbPhone}</td>
                <td>{(nhpItem.NhpTbStatus === true || nhpItem.NhpTbStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                  <button className='btn btn-success m-2'onClick={(ev)=>nhpHandleEdit(nhpItem)}>NHP-edit</button>
                    <button className='btn btn-danger'onClick={(ev)=>nhpHandleDelete(nhpItem.nhpID)}>Nhp-delete</button>
                </td>

            </tr>

        );
    })
    // Su kien xoa
  const nhpHandleDelete = async (nhpID)=>{
    if(window.confirm("Bạn có muốn xóa dữ liệu có nhpId không?" + nhpID)){
      onNhpDelete(nhpID);
    }    
  }
  const nhpHandleEdit=(nhpObjTableName)=>{
    onNhpEdit(nhpObjTableName);
  }
  
  return (
    <div>
      <h2>Danh sach thong tin...</h2>
      <hr/>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>NhpID</th>
                <th>NhpTbName</th>
                <th>NhpTbEmail</th>
                <th>NhpTbPhone</th>
                <th>NhpTbStatus</th>
            </tr>
        </thead>
        <tbody>
            {NhpElementTableName}
       

        </tbody>

      </table>
    </div>
  )
}
