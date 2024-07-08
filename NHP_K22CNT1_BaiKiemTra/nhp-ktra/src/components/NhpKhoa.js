import React, { useState, useEffect } from 'react';

const NhpKhoaList = () => {
  const [khoaList, setKhoaList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/NhpKhoa')
      .then((response) => response.json())
      .then((data) => setKhoaList(data));
  }, []);

  return (
    <div>
      <h2>Danh sách khoa</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khoa</th>
          </tr>
        </thead>
        <tbody>
          {khoaList.map((khoa) => (
            <tr key={khoa.id}>
              <td>{khoa.id}</td>
              <td>{khoa.tenKhoa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NhpKhoaList;