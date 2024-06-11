import React, { useEffect, useState } from 'react'

export default function NhpStudentAddOrEdit({nhpOnSubmit, StudentEdit, isEdit}) {
    // Doi tuong Student
    
    const [nhpStudent, setNhpStudent] = useState(StudentEdit);
    
    useEffect(() => {
        setNhpStudent(StudentEdit);
    }, [StudentEdit])
    //Ham xu ly su kien thay doi tren dieu khien

    const nhpHandleChange = (nhpEvent) => {
        let name = nhpEvent.target.name;
        let value = nhpEvent.target.value;
        
        setNhpStudent(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const nhpHandleSubmit = (nhpEvent) => {
        nhpEvent.preventDefault();
        nhpOnSubmit(nhpStudent);
    }
  return (
    <div>
        <h2>{isEdit ? 'Update Student' : 'Them moi Student'}</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Student ID</span>
                <input name='nhp_Id' value={nhpStudent.nhp_Id} onChange={nhpHandleChange}/>
            </div>
            <div>
                <label>Student Name</label>
                <input name='nhp_StudentName' value={nhpStudent.nhp_StudentName} onChange={nhpHandleChange}/>
            </div>
            <div>
                <label> age</label>
                <input name='nhp_age' value={nhpStudent.nhp_age} onChange={nhpHandleChange}/>
            </div>
            <div className="form-group mb-3">
            <label>Hoạt động:</label>
            <div className="form-check">
              <input
                type="checkbox"
                name='nhp_IsActive'
                checked={nhpStudent.nhp_IsActive}
                onChange={nhpHandleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
            <button onClick={nhpHandleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}