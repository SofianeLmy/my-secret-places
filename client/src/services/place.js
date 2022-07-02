import api from './api';

export const placeAdd = (place) =>
  api.post(`/place/add`, place).then((response) => response.data);

export const placeLoad = (id) =>
  api.get(`/place/${id}`).then((response) => response.data);

export const listAllPlaceData = () =>
  api.get('/').then((response) => response.data);
