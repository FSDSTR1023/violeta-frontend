import instance from './Connection';

export const GetAllRutas = () => instance.get('/rutas');
export const createRuta = (rutaData) => instance.post('/rutas', rutaData);
export const deleteRuta = (rutaId) => instance.delete(`/rutas/${rutaId}`);