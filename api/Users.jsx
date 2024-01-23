import instance from './Connection';

export const GetAllUsers = () => instance.get('/users');
export const registerUser = (formUserData) => instance.post('/users', formUserData);
export const deleteUser = (userId) => instance.delete(`/users/${userId}`);