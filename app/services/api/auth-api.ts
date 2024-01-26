import { GetTokenResult, GetWhoAmIResult } from "app/services/api/api.types"
import axios from "axios"

export class AuthApi {

  async getToken(username: string, password: string): Promise<GetTokenResult> {
    const response = await axios.post('http://192.168.0.244:8080/token', {
      username: username,
      password: password
    });
    console.tron.log(response);
    const { accessToken } = response.data;

    return { accessToken: accessToken };
  }

  async whoami(token: string): Promise<GetWhoAmIResult> {
    const response = await axios.post('http://192.168.0.244:8080/whoami', {token: token});
    console.tron.log(response);
    const { user } = response.data;
    return { user: user };
  }
}