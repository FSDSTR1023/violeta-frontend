import instance from './Connection';

export const GetAllRutas = () => instance.get('/rutas');
export const createRuta = (rutaData) => instance.post('/rutas', rutaData);
export const getRutaById = (rutaId) => instance.get(`/rutas/${rutaId}`);
export const deleteRuta = (rutaId, { publicId }) => {
    const response = instance.delete(`/rutas/${rutaId}`, { params: { publicId } });
    return response.data;
  }
export const updateRuta = (rutaId, updateRutaData) => instance.put(`/rutas/${rutaId}`, updateRutaData);
export const getRutasByUserId = () => instance.get('/users/profile');
export const updateLevel = (userId, newData) => {
  return instance.put(`/users/${userId}`, newData);
};