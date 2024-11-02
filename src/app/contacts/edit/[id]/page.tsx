import { revalidatePath } from 'next/cache';

import { updateContact, getContact, UserCommandDto } from '@/api';
import { ContactForm } from '@/components/ui/contact-form';
import { redirect } from 'next/navigation';

type ContactProps = {
  params: Promise<{ id: string }>;
};

export default async function EditContact({ params }: ContactProps) {
  const contactId = (await params).id;

  const contact = await getContact(contactId);

  const defaultFormValues = {
    firstName: contact.first_name,
    lastName: contact.last_name,
    email: contact.email,
    gender: contact.gender,
    ipAddress: contact.ip_address,
  };

  async function submitForm(form: FormData) {
    'use server';

    const data = {
      ...contact,
      first_name: form.get('firstName'),
      last_name: form.get('lastName'),
      email: form.get('email'),
      gender: form.get('gender'),
      ip_address: form.get('ipAddress'),
    } as Partial<UserCommandDto>;

    const result = await updateContact(data);

    console.log({ result });

    revalidatePath('/contacts');
    redirect('/contacts');
  }
  return <ContactForm action={submitForm} defaultValues={defaultFormValues} />;
}
