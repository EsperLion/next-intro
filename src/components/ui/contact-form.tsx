type ContactFormShape = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
};

type ContactFormProps = {
  action(formData: FormData): void;
  defaultValues?: ContactFormShape;
};

const DEFAULT_VALUES: ContactFormShape = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  ipAddress: '',
};

const FIELDS: { label: string; name: keyof ContactFormShape; type?: string }[] =
  [
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

export function ContactForm({
  action,
  defaultValues = DEFAULT_VALUES,
}: ContactFormProps) {
  return (
    <form action={action} className="shadow-md rounded-md p-4 mb-3">
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
            defaultValue={defaultValues[field.name]}
            required
          />
        </div>
      ))}
      <button className="bg-blue-600 hover:bg-blue-700 border rounded-full text-sm px-3 py-1 text-white min-w-20">
        Add
      </button>
    </form>
  );
}
