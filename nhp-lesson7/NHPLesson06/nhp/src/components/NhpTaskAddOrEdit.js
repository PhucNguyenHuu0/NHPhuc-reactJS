import React, { useEffect, useState } from 'react'

export default function NhpTaskAddOrEdit({nhpOnSubmit, taskEdit, isEdit}) {
    // Doi tuong Task
    
    const [nhpTask, setNhpTask] = useState(taskEdit);
    
    useEffect(() => {
        setNhpTask(taskEdit);
    }, [taskEdit])
    //Ham xu ly su kien thay doi tren dieu khien

    const nhpHandleChange = (nhpEvent) => {
        let name = nhpEvent.target.name;
        let value = nhpEvent.target.value;
        
        setNhpTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const nhpHandleSubmit = (nhpEvent) => {
        nhpEvent.preventDefault();
        nhpOnSubmit(nhpTask);
    }
  return (
    <div>
        <h2>{isEdit ? 'Update task' : 'Them moi Task'}</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Task ID</span>
                <input name='nhp_taskId' value={nhpTask.nhp_taskId} onChange={nhpHandleChange}/>
            </div>
            <div>
                <label>Task Name</label>
                <input name='nhp_taskName' value={nhpTask.nhp_taskName} onChange={nhpHandleChange}/>
            </div>
            <div>
                <label>Task Level</label>
                <select name='nhp_level' value={nhpTask.nhp_level} onChange={nhpHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={nhpHandleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}