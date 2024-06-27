import { UseState, UseEffect } from 'react';
import React from 'react'
import axios from './api/NhpApi'
import NhpListUsers from './components/NhpListUsers';
export default function NhpApp() {
  const [NhpListUsers, setNhpListUsers] = UseState([]);

  // doc du lieu tu api
  const NhpGetAllUsers = async () => {
    const NhpResponse = await axios.get("NhpUsers");
    console.log("Api Data:", NhpResponse.data);
    setNhpListUsers(NhpResponse.data);
  }

  UseEffect(() => {
    NhpGetAllUsers();
    console.log("Day la State Data:", NhpListUsers);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <NhpListUsers renderNhpListUsers={NhpListUsers} />
    </div>
  )
}