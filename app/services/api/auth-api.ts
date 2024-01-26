import axios from "axios"
import { GetTokenResult, GetWhoAmIResult } from "app/services/api/api.types"

interface getTokenData {
  data: {
    bearerToken: string
    username: string
  }
}
export class AuthApi {

  async getToken(username: string, password: string): Promise<GetTokenResult> {
    const response: getTokenData = await axios.post('http://192.168.0.12:8080/token', {
      username: username,
      password: password
    });
    const accessToken = response.data.bearerToken
    return { accessToken: accessToken } ;
  }

  async whoami(token: string): Promise<GetWhoAmIResult> {
    const response = await axios.get('http://192.168.0.12:8080/whoami', {headers: {
        'Authorization': `Bearer ${token}`
      }});
    const user = response.data
    return { user: user } ;
  }
}