import instance from './Connection';

export const GetAllRutas = () => instance.get('/rutas');
export const createRuta = (rutaData) => instance.post('/rutas', rutaData);
export const deleteRuta = (rutaId) => instance.delete(`/rutas/${rutaId}`);
export const updateRuta = (rutaId) => instance.put(`/rutas/${rutaId}`);
export const getRutasByUserId = () => instance.get('/users/profile');
