import { apiClient } from '@/shared/api/client/api.client';
import { TUserCredentials } from '@/shared/api/types/auth-api.types';

class AuthApi {
  public async register(params: TUserCredentials) {
    return apiClient.POST('/users', {
      body: params,
    });
  }

  public async login(params: TUserCredentials) {
    return apiClient.POST('/sessions/auth', {
      body: params,
    });
  }

  public async logout() {
    return apiClient.DELETE('/sessions');
  }

  public async refreshTokens() {
    return apiClient.POST('/sessions/tokens');
  }
}

export const authApi = new AuthApi();
