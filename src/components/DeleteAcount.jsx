import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../api/Users';
import { useSession } from '../contexts/SessionContext';

const DeleteAccount = ({ userId }) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const { closeSession } = useSession();

  const handleDeleteAccount = async () => {
    try {
      setIsDeleting(true);
      await deleteUser(userId);
        closeSession();
        navigate('/');
      console.log('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account:', error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete your account?</p>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        onClick={handleDeleteAccount}
        disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete Account'}
      </button>
    </div>
  );
};

export default DeleteAccount;
