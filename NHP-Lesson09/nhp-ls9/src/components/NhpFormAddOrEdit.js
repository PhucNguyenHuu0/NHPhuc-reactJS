import axios from '../api/NhpApi'
import React, { useEffect, useState } from 'react'

export default function NhpFormAddOrEdit({ onNhpClose, onNhpSubmitForm, renderUsers, isNew }) {
    const [nhpId, setNhpId] = useState(0);
    const [nhpUserName, setNhpUserName] = useState("");
    const [nhpPassword, setNhpPassword] = useState("");
    const [nhpEmail, setNhpEmail] = useState("");
    const [nhpPhone, setNhpPhone] = useState("");

    useEffect(() => {
        if (!isNew) {
            setNhpId(renderUsers.id)
            setNhpUserName(renderUsers.UserName)
            setNhpPassword(renderUsers.Password)
            setNhpEmail(renderUsers.Email)
            setNhpPhone(renderUsers.Phone)
        }
    }, [renderUsers, isNew])

    const nhpHandleClose = () => {
        onNhpClose();
    }

    const nhpHandleSubmit = async (event) => {
        event.preventDefault();
        const nhpObjUser = {
            UserName: nhpUserName,
            Password: nhpPassword,
            Email: nhpEmail,
            Phone: nhpPhone,
            id: nhpId
        }

        try {
            if (isNew) {
                await axios.post("NhpUsers", nhpObjUser);
            } else {
                await axios.put(`NhpUsers/${nhpId}`, nhpObjUser);
            }
            onNhpSubmitForm(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            onNhpSubmitForm(false);
        }
    }

    return (
        <div className=''>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="id">Id</span>
                    <input type="text" className="form-control"
                        name='id' value={nhpId} onChange={(ev) => setNhpId(ev.target.value)}
                        placeholder="id" aria-label="id" aria-describedby="id" disabled={!isNew} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="UserName">UserName</span>
                    <input type="text" className="form-control"
                        name='UserName' value={nhpUserName} onChange={(ev) => setNhpUserName(ev.target.value)}
                        placeholder="UserName" aria-label="UserName" aria-describedby="UserName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Password">Password</span>
                    <input type="password" className="form-control"
                        name='Password' value={nhpPassword} onChange={(ev) => setNhpPassword(ev.target.value)}
                        placeholder="Password" aria-label="Password" aria-describedby="Password" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Email">Email</span>
                    <input type="email" className="form-control"
                        name='Email' value={nhpEmail} onChange={(ev) => setNhpEmail(ev.target.value)}
                        placeholder="Email" aria-label="Email" aria-describedby="Email" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Phone">Phone</span>
                    <input type="number" className="form-control"
                        name='Phone' value={nhpPhone} onChange={(ev) => setNhpPhone(ev.target.value)}
                        placeholder="Phone" aria-label="Phone" aria-describedby="Phone" />
                </div>
                <button className='btn btn-primary' name='btnNhpSave' onClick={nhpHandleSubmit}>{isNew ? 'Add' : 'Update'}</button>
                <button className='btn btn-danger' onClick={nhpHandleClose}>Close</button>
            </form>
        </div>
    )
}
