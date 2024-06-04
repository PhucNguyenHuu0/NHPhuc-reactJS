import './App.css';
import { useState } from 'react';
import NhpListTask from './components/NhpListTask';
import NhpTaskAddOrEdit from './components/NhpTaskAddOrEdit';

function App() {
  const nhp_listTasks = [
    { nhp_taskId:2210900119, nhp_taskName:"nguyen huu phuc", nhp_level:"Small" },
    { nhp_taskId:1, nhp_taskName:"Học lập trình frontend", nhp_level:"Small" },
    { nhp_taskId:2, nhp_taskName:"Học lập trình reactjs",nhp_level:"Medium"},
    { nhp_taskId:3, nhp_taskName:"Lập trình với Frontend - Reactjs",nhp_level:"High"},
    { nhp_taskId:4, nhp_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",nhp_level:"Small"},
   ];
   const nhpTaskObj = { 
    nhp_taskId: 0,
    nhp_taskName:"",
    nhp_level:""
}
   // su dung hang useState de luu tru trang thai du lieu
   const [nhpListTask, setNhpListTask] = useState(nhp_listTasks);
   const [taskEdit, setTaskEdit] = useState(nhpTaskObj);
   const [isEdit, setIsEdit] = useState(false);

   const nhpHandleSubmit = (nhpParam) => {
      console.log("App:", nhpParam);
     
      if(isEdit){
        const updatedData = nhpListTask.map((element) => {
          if (element.nhp_taskId === nhpParam.nhp_taskId) {
            return { nhp_taskId: nhpParam.nhp_taskId,nhp_taskName:nhpParam.nhp_taskName , nhp_level: nhpParam.nhp_level }; // Update the element with the new name
          }
          return element; // Return the original element for other IDs
        });
        setNhpListTask(updatedData);
        setIsEdit(false);
        setTaskEdit(nhpTaskObj)
      } else {
        setNhpListTask(prev => {
          return[
            ...prev,
            nhpParam
          ]
        })
      }
   }
   const removeItem = (id) => {
    console.log("id:", id);

    const updatedData = nhpListTask.filter((element) => element.nhp_taskId !== id);
    setNhpListTask(updatedData)
   }
   const editItem = (task) => {
    console.log("task:", task);
    setTaskEdit(task)
    setIsEdit(true)
   }
  return (
    <div className="container border">
      <h1>Nguyen Huu Phuc - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sach list Task*/}
        <NhpListTask renderNhpListTasks = {nhpListTask} removeItem={removeItem} editItem={editItem}/>
      </div>
      <div>
        <NhpTaskAddOrEdit nhpOnSubmit={nhpHandleSubmit} taskEdit={taskEdit} isEdit={isEdit}/>
      </div>
    </div>
    
  );
}

export default App;