import axios from 'axios';

export const createAppAxios = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};
