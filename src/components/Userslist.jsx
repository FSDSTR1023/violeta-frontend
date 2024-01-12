import React, { useState, useEffect } from 'react';
import { GetAllUsers } from '../../api/Users';

function ListAllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetAllUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Users:</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map(user => (
          <div key={user._id} className="bg-slate-50 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2 gap-1">{user}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAllUsers;