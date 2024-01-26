import { Api } from "app/services/api/api"
import { GetTokenResult } from "app/services/api/api.types"
import { ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "app/services/api/apiProblem"

export class AuthApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getToken(username: string, password: string): Promise<GetTokenResult> {
    const response: ApiResponse<any> = await this.api.apisauce.post('token', {
      username: username,
      password: password
    });
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) throw new Error(problem.kind);
    }
    const { accessToken } = response.data;

    return { accessToken: accessToken };
  }
}