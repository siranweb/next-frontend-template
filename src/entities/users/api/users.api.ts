import { apiClient } from '@/shared/lib/api-client/api.client';
import { withSessionRefresh } from '@/entities/users/model/helpers/auth.helpers';

class UsersApi {
  public async getMyProfile() {
    return withSessionRefresh(() => apiClient.GET('/users/me/profile'));
  }
}

export const usersApi = new UsersApi();
