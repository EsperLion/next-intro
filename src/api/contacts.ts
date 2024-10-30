import { User } from '@/shared/types';
import { GET } from './api';

export function getContacts() {
  return GET<{ data: User[] }>('/contacts').then((data) => data);
}
