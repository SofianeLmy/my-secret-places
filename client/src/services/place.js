import api from './api';

export const placeAdd = (place) =>
  api.post(`/place/add`, place).then((response) => response.data);

export const placeLoad = (id) =>
  api.get(`/place/${id}`).then((response) => response.data);

export const placeEdit = (id, place) =>
  api.patch(`/place/${id}`, place).then((response) => response.data);

export const listAllPlaceData = () =>
  api.get('/').then((response) => response.data);

export const profilePlacesLoad = (id) =>
  listAllPlaceData().then((data) => {
    console.log(data);
    data.places.filter((place) => place.creator._id === id);
  });
