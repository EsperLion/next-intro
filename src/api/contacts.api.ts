import { DELETE, GET, POST, PUT } from './api';

type UserDTO = {
  id: number;
  documentId: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ip_address: string;
};

type UserQueryDto = UserDTO;
type UserCommandDto = Partial<UserDTO>;

export function getContact(id: string) {
  return GET<{ data: UserQueryDto }>(`contacts/${id}`).then(
    (data) => data.data,
  );
}

export function getContacts() {
  return GET<{ data: UserQueryDto[] }>('/contacts').then((data) => data.data);
}

export function createContact(data: UserCommandDto) {
  return POST<{ data: UserCommandDto }>('/contacts', data).then((data) => data);
}

export function updateContact(data: UserCommandDto) {
  return PUT<{ data: UserCommandDto }>(
    `contacts/${data.documentId}`,
    data,
  ).then((data) => data);
}

export function deleteUser(id: string) {
  return DELETE<{ data: UserQueryDto }>(`contacts/${id}`).then(
    (data) => data.data,
  );
}
