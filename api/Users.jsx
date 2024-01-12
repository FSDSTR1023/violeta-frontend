import instance from './Connection';

export const GetAllUsers = () => instance.get('/users');