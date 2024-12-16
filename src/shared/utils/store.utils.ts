import { FetchResponse } from 'openapi-fetch';

export function prepareStoreApiResult<T extends TApiResultWithError>(
  apiResult?: T,
): TStoreApiResult<T> {
  if (apiResult) {
    return { error: apiResult.error };
  }
  return { error: undefined };
}

type TApiResultWithError = Pick<FetchResponse<any, any, any>, 'error'>;
export type TStoreApiResult<T extends TApiResultWithError> = T['error'];
