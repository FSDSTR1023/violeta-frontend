import React, { useEffect } from 'react';
import { useSession } from '../contexts/SessionContext';

const UserProfile = () => {
  const { getProfile, profile } = useSession();

  useEffect(() => {
    getProfile();
  }, []);

  console.log('Profile ', profile);

  return (
    <div>
      <h1 className="text-center mt-5">{profile?.nickname || 'Not logged in'}</h1>
    </div>
  );
}  

export default UserProfile