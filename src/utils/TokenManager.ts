import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LocalStorageService } from './StorageService';

const TOKEN_KEY = 'token';

export type AuthHeaders = {
  accessToken: string;
  client: string;
  uid: string;
  tokenType: string;
};

export abstract class TokenManager {
  private static setToken(token: AuthHeaders) {
    LocalStorageService.setItem<AuthHeaders>(TOKEN_KEY, token);
  }

  static getToken() {
    return LocalStorageService.getItem<AuthHeaders>(TOKEN_KEY);
  }

  static removeToken() {
    LocalStorageService.removeItem(TOKEN_KEY);
  }

  static getTokenFromResponse(response: AxiosResponse): AuthHeaders {
    const { headers } = response;

    return {
      accessToken: headers['access-token'],
      tokenType: headers['token-type'],
      client: headers.client,
      uid: headers.uid,
    };
  }

  static updateTokenFromResponse(response: AxiosResponse): void {
    const token = this.getTokenFromResponse(response);

    const { accessToken } = token;

    if (accessToken) this.setToken(token);
  }

  static setConfigHeadersWithToken = (config: AxiosRequestConfig): void => {
    const token = this.getToken();

    if (!token) return;

    const { accessToken, client: clientHeader, tokenType, uid } = token;

    config.headers = {
      ...config.headers,
      'access-token': accessToken,
      'token-type': tokenType,
      client: clientHeader,
      uid,
    };
  };
}
