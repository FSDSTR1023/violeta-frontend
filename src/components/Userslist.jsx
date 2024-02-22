import React, { useState, useEffect } from 'react';
import { GetAllUsers, deleteUser } from '../../api/Users';

function ListAllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetAllUsers()
      .then(users => {
        setUsers(users.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleUserDelete = async (user) => {
    console.log('User object:', user);
  
    if (!user || !user._id) {
      console.error('Invalid user or user ID');
      return;
    }
  
    try {
      await deleteUser(user._id);
      setUsers(prevUsers => prevUsers.filter(u => u._id !== user._id));
      console.log(`User with ID ${user._id} deleted`);

    } catch (error) {
      console.error(`Error deleting user with ID ${user._id}:`, error);
    }
  };
  
  

  const excludedProperties = ['_id', 'password', 'createdAt', 'modifiedAt', 'deletedAt', 'updatedAt', '__v' ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4  text-center mt-8">Usuarios:</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map(user => (
          <div key={user.id} className="bg-slate-50 rounded-lg shadow-md p-4">
            {Object.entries(user).map(([key, value]) => (
              !excludedProperties.includes(key) && (
                <p key={key} className="text-lg font-semibold mb-2 gap-1">
                  <span className="text-gray-400 capitalize">{key}: </span> 
                  <span className="underlined">{value}</span>
                </p>
              )
            ))}
            <button onClick={() => handleUserDelete(user)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAllUsers;