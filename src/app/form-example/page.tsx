import { Input } from '@/components';

export default function Home() {
  async function submitForm(form: FormData) {
    'use server';

    const rawFormData = {
      customerId: form.get('nickname'),
      amount: form.get('email'),
      status: form.get('password'),
    };

    console.log({ rawFormData });
  }

  return (
    <div className="container is-max-tablet">
      <h1>Form Example</h1>

      <form action={submitForm}>
        <Input name="nickname" />
        <Input name="email" type="email" />
        <Input name="password" type="password" />

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
