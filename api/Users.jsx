import instance from './Connection';

export const GetAllUsers = () => instance.get('/users');
export const registerUser = (formUserData) => instance.post('/users', formUserData);
export const deleteUser = (userId) => instance.delete(`/users/${userId}`);
export const loginUser = ({ nickname, password }) => instance.post('/users/login', { nickname, password })
export const profileUser = () => instance.get('/users/profile')