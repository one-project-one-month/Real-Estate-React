import { createAppAxios } from '@api';

const baseURL = import.meta.env.VITE_EXPRESS_URL;
export const appAxios = createAppAxios(baseURL);
