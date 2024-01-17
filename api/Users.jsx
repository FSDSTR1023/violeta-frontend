import instance from './Connection';

export const GetAllUsers = () => instance.get('/users');
export const CreateUser = (formUserData) => instance.post('/users', formUserData);