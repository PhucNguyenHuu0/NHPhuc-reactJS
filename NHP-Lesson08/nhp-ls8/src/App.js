import './App.css';
import { useState } from 'react';
import NhpListStudent from './components/NhpListStudent';
import NhpStudentAddOrEdit from './components/NhpStudentAddOrEdit';

function App() {
  const nhp_listStudents = [
    { nhp_Id:2210900119, nhp_StudentName:"nguyen huu phuc", nhp_age:21},
    { nhp_Id:1, nhp_StudentName:"Le Tinh Tinh", nhp_age:19},
    { nhp_Id:2, nhp_StudentName:"Duong Hao Hoa",nhp_age:18},
    { nhp_Id:3, nhp_StudentName:"Nguyen Trung Quoa",nhp_age:19},
    { nhp_Id:4, nhp_StudentName:"Dao Linh Tinh",nhp_age:19},
   ];
   const nhpStudentObj = { 
    nhp_Id: 0,
    nhp_StudentName:"",
    nhp_age:"",
}
   // su dung hang useState de luu tru trang thai du lieu
   const [nhpListStudent, setNhpListStudent] = useState(nhp_listStudents);
   const [StudentEdit, setStudentEdit] = useState(nhpStudentObj);
   const [isEdit, setIsEdit] = useState(false);

   const nhpHandleSubmit = (nhpParam) => {
      console.log("App:", nhpParam);
     
      if(isEdit){
        const updatedData = nhpListStudent.map((element) => {
          if (element.nhp_Id === nhpParam.nhp_Id) {
            return { nhp_Id: nhpParam.nhp_Id,nhp_StudentName:nhpParam.nhp_StudentName , nhp_age: nhpParam.nhp_age }; // Update the element with the new name
          }
          return element; // Return the original element for other IDs
        });
        setNhpListStudent(updatedData);
        setIsEdit(false);
        setStudentEdit(nhpStudentObj)
      } else {
        setNhpListStudent(prev => {
          return[
            ...prev,
            nhpParam
          ]
        })
      }
   }
   const removeItem = (id) => {
    console.log("id:", id);

    const updatedData = nhpListStudent.filter((element) => element.nhp_Id !== id);
    setNhpListStudent(updatedData)
   }
   const editItem = (Student) => {
    console.log("Student:", Student);
    setStudentEdit(Student)
    setIsEdit(true)
   }
  return (
    <div className="container border">
      <h1>Nguyen Huu Phuc - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sach list Student*/}
        <NhpListStudent renderNhpListStudents = {nhpListStudent} removeItem={removeItem} editItem={editItem}/>
      </div>
      <div>
        <NhpStudentAddOrEdit nhpOnSubmit={nhpHandleSubmit} StudentEdit={StudentEdit} isEdit={isEdit}/>
      </div>
    </div>
    
  );
}

export default App;