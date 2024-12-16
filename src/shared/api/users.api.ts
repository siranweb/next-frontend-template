import { apiClient } from '@/shared/api/client/api.client';

class UsersApi {
  public async getMyProfile() {
    return apiClient.GET('/users/me/profile');
  }
}

export const usersApi = new UsersApi();
