import createClient from 'openapi-fetch';
import { paths } from '../types/gen';

export const apiClient = createClient<paths>({ baseUrl: 'http://localhost:4000' });
