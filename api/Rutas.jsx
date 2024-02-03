import instance from './Connection';

export const GetAllRutas = () => instance.get('/rutas');
export const createRuta = (rutaData) => instance.post('/rutas', rutaData);
export const getRutaById = (rutaId) => instance.get(`/rutas/${rutaId}`);
export const deleteRuta = (rutaId) => instance.delete(`/rutas/${rutaId}`);
export const updateRuta = (rutaId, updateRutaData) => instance.put(`/rutas/${rutaId}`, updateRutaData);
export const getRutasByUserId = () => instance.get('/users/profile');
