import { Metadata } from 'next';

import { createContact, getContacts } from '@/api';
import { User } from '@/shared/types';
import { revalidatePath } from 'next/cache';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Post page',
};

const FIELDS = [
  {
    label: 'First Name',
    name: 'firstName',
  },
  {
    label: 'Last Name',
    name: 'lastName',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Gender',
    name: 'gender',
  },
  {
    label: 'Ip Address',
    name: 'ipAddress',
  },
];

export default async function Users() {
  const users = await getContacts();

  async function addContact(form: FormData) {
    'use server';

    const data = {
      first_name: form.get('firstName'),
      last_name: form.get('lastName'),
      email: form.get('email'),
      gender: form.get('gender'),
      ip_address: form.get('ipAddress'),
    } as Partial<User>;

    const result = await createContact(data);

    console.log({ result });

    revalidatePath('/users');
  }

  return (
    <div className="w-dvw h-dvh flex items-center justify-center ">
      <div className="max-w-5xl flex items-start justify-stretch overflow-hidden h-dvh">
        <div className="w-80 flex-shrink-0 flex-grow-0">
          <h1>Posts Page</h1>

          <form action={addContact} className="shadow-md rounded-md p-4 mb-3">
            {FIELDS.map((field) => (
              <div className="mb-3" key={field.name}>
                <label className="text-sm text-gray-700" htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  className="block border rounded-full text-sm px-3 py-1 w-full"
                  type={field.type || 'text'}
                  id={field.name}
                  name={field.name}
                  required
                />
              </div>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 border rounded-full text-sm px-3 py-1 text-white min-w-20">
              Add
            </button>
          </form>
        </div>

        <div className="h-full overflow-auto">
          <div className="px-1">
            {users.map((user) => (
              <div
                key={user.id}
                className="shadow-md rounded p-4 bg-blue-600 text-white mb-3 last:mb-0"
              >
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
                <h3>
                  {user.gender}, {user.email}
                </h3>
                <div className="text-gray-400">{user.ip_address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
