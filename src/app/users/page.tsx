import { Metadata } from 'next';

import { getContacts } from '@/api';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Post page',
};

export default async function Users() {
  const users = await getContacts();

  console.log({ users });

  return (
    <div className="w-dvw min-h-dvh flex items-center justify-center">
      <div className="max-w-80">
        <h1>Posts Page</h1>

        <div>
          {users.map((user) => (
            <div
              key={user.id}
              className="shadow rounded p-4 bg-blue-600 text-white mb-3 last:mb-0"
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
  );
}
