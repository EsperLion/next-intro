import { User } from '@/shared/types';
import { GET, POST } from './api';

export function getContacts() {
  return GET<{ data: User[] }>('/contacts').then((data) => data.data);
}

export function createContact(data: Partial<User>) {
  return POST<{ data: User }>('/contacts', data).then((data) => data);
}
