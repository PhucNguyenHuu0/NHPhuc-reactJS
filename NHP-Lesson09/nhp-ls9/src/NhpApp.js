import './App.css';
import NhpListUsers from './components/NhpListUsers';
import axios from './api/NhpApi';
import { useEffect, useState } from 'react';
import NhpFormAddOrEdit from './components/NhpFormAddOrEdit';

function NhpApp() {
  const [nhpListUsers, setNhpListUsers] = useState([]);
  const [nhpAddOrEdit, setNhpAddOrEdit] = useState(false);
  const [nhpUser, setNhpUser] = useState({
    UserName: '',
    Password: '',
    Email: '',
    Phone: '',
    id: 0,
  });
  

  // Fetch all users from the API
  const nhpGetAllUsers = async () => {
    try {
      const response = await axios.create('nhpUsers');
      setNhpListUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    nhpGetAllUsers();
  }, []);


  // Handle adding a new user
  const nhpHandleAddNew = () => {
    setNhpAddOrEdit(true);
    setNhpUser({
      UserName: '',
      Password: '',
      Email: '',
      Phone: '',
      id: 0,
    });
  };

  // Handle closing the form
  const nhpHandleClose = () => {
    setNhpAddOrEdit(false);
  };

  // Handle submitting the form
  const nhpHandleSubmit = async (isNew) => {
    try {
      if (isNew) {
        // Add a new user
        await axios.post('NhpUsers', nhpUser);
      } else {
        // Update an existing user
        await axios.put(`NhpUsers/${nhpUser.id}`, nhpUser);
      }
      nhpGetAllUsers();
      setNhpAddOrEdit(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Handle deleting a user
  const nhpHandleDelete = async (id) => {
    try {
      await axios.delete(`NhpUsers/${id}`);
      nhpGetAllUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const nhpElementForm = nhpAddOrEdit ? (
    <NhpFormAddOrEdit
      renderUsers={nhpUser}
      onNhpClose={nhpHandleClose}
      onNhpSubmitForm={nhpHandleSubmit}
      isNew={!nhpUser.id}
    />
  ) : null;

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      <NhpListUsers
        renderNhpListUsers={nhpListUsers}
        onNhpDelete={nhpHandleDelete}
        onNhpEdit={(user) => {
          setNhpUser(user);
          setNhpAddOrEdit(true);
        }}
      />
      <button className="btn btn-primary" onClick={nhpHandleAddNew}>
        Thêm mới
      </button>
      <hr />
      {nhpElementForm}
    </div>
  );
}

export default NhpApp;
