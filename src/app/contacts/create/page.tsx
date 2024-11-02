import { createContact, UserCommandDto } from '@/api';
import { ContactForm } from '@/components/ui/contact-form';
import { revalidatePath } from 'next/cache';

export default function CreateContact() {
  async function submitForm(form: FormData) {
    'use server';

    const data = {
      first_name: form.get('firstName'),
      last_name: form.get('lastName'),
      email: form.get('email'),
      gender: form.get('gender'),
      ip_address: form.get('ipAddress'),
    } as Partial<UserCommandDto>;

    const result = await createContact(data);

    console.log({ result });

    revalidatePath('/contacts');
  }
  return <ContactForm action={submitForm} />;
}
