import { ReactNode, useLayoutEffect } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { client } from 'utils/request';

import { TokenManager } from 'utils/TokenManager';

type Props = { children: ReactNode };

export const AxiosInterceptor = ({ children }: Props): JSX.Element => {
  const responseInterceptor = (response: AxiosResponse) => {
    TokenManager.updateTokenFromResponse(response);
    return response;
  };

  const interceptorError = (error: AxiosError) => {
    const { response, config } = error;

    if (response) TokenManager.updateTokenFromResponse(response);

    if (response?.status === 401 && !config?.url?.includes('/verify/')) {
      TokenManager.removeToken();
    }

    return Promise.reject(error);
  };

  const addInterceptors = () => {
    const requestInterceptorInstance = client.interceptors.request.use(
      (config) => config,
      undefined,
    );

    const responseInterceptorInstance = client.interceptors.response.use(
      responseInterceptor,
      interceptorError,
    );

    return {
      requestInterceptorInstance,
      responseInterceptorInstance,
    };
  };

  const removeInterceptors = (
    requestInterceptorInstance: number,
    responseInterceptorInstance: number,
  ) => {
    client.interceptors.request.eject(requestInterceptorInstance);
    client.interceptors.response.eject(responseInterceptorInstance);
  };

  useLayoutEffect(() => {
    const { requestInterceptorInstance, responseInterceptorInstance } =
      addInterceptors();

    return () =>
      removeInterceptors(
        requestInterceptorInstance,
        responseInterceptorInstance,
      );
  }, []);

  return children as JSX.Element;
};
