import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Key-Inflection': 'camel',
    'ngrok-skip-browser-warning': 'true',
  },
});

export const request = <R = undefined>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<R> => {
  const onSuccess = (response: AxiosResponse<R>) => response.data;

  const onError = (_error: AxiosError) => {
    return Promise.reject({ message: 'There was a problem' });
  };

  return client({ url, ...options })
    .then(onSuccess)
    .catch(onError);
};

export default request;
