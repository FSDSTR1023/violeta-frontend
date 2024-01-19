import instance from './Connection';

export const GetAllUsers = () => instance.get('/users');
export const Login = (formUserData) => instance.post('/users', formUserData);