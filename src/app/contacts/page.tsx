import { Metadata } from 'next';

import { deleteContact, getContacts } from '@/api';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Post page',
};

export default async function Contact() {
  const contacts = await getContacts();

  async function deleteAction(contactId: string) {
    'use server';
    const result = await deleteContact(contactId);

    console.log(result);

    revalidatePath('/contacts');
  }

  return (
    <div className="w-dvw flex items-center justify-center ">
      <div className="max-w-5xl flex items-start justify-stretch">
        <div className="h-full">
          <div className="px-1">
            <h1>Contacts Page</h1>
            <Link
              href="/contacts/create"
              className="inline-block bg-blue-600 hover:bg-blue-700 border rounded-full text-sm px-3 py-1 text-white min-w-20"
            >
              Add new Contact
            </Link>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="shadow-md rounded p-4 bg-blue-600 text-white mb-3 last:mb-0"
              >
                <h2>
                  {contact.first_name} {contact.last_name}
                </h2>
                <h3>
                  {contact.gender}, {contact.email}
                </h3>
                <div className="text-gray-400">{contact.ip_address}</div>
                <div className="flex gap-1">
                  <Link
                    href={`/contacts/edit/${contact.documentId}`}
                    className="bg-blue-600 hover:bg-blue-700 border rounded-full text-sm px-3 py-1 text-white min-w-20"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={deleteAction.bind(null, contact.documentId)}
                    className="bg-blue-600 hover:bg-blue-700 border rounded-full text-sm px-3 py-1 text-white min-w-20"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
