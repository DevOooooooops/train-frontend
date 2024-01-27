import { GetTokenResult, GetWhoAmIResult } from 'app/services/api/api.types';
import { apiBase } from './base';

interface getTokenData {
  data: {
    bearerToken: string;
    username: string;
  };
}
export class AuthApi {
  async getToken(username: string, password: string): Promise<GetTokenResult> {
    const response: getTokenData = await apiBase.post('token', {
      username: username,
      password: password,
    });
    const accessToken = response.data.bearerToken;
    return { accessToken: accessToken };
  }

  async whoami(token: string): Promise<GetWhoAmIResult> {
    const response = await apiBase.get('/whoami', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    return { user: user };
  }
}
