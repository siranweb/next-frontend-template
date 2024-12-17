import { FetchResponse } from 'openapi-fetch';
import { authApi } from '@/entities/users/api/auth.api';

/**
 * @description Хелпер для авторизации. Принимает колбэк с запросом, для которого нужна авторизация.
 * Если оригинальный запрос получает код 401 - автоматически отправляется запрос на
 * обновление токенов. После успешного выполнения оригинальный запрос повторяется.
 * @example
 * async function getMyProfile() {
 *     return withRefresh(() => apiClient.GET('/users/me/profile'));
 * }
 */
export async function withSessionRefresh<T extends FetchResponse<any, any, any>>(
  apiClb: () => Promise<T>,
): Promise<T> {
  const firstAttempt = await apiClb();
  if (firstAttempt.response.status !== 401) {
    return firstAttempt;
  }

  const refreshTokensResult = await authApi.refreshTokens();
  if (refreshTokensResult.error) {
    return firstAttempt;
  }

  return apiClb();
}
