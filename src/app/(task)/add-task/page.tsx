const formControls = [
  {
    name: 'nickname',
    type: 'text',
    label: 'Enter Nickname',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Enter Email',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Enter Password',
  },
  {
    name: 'password2',
    type: 'password',
    label: 'Repeat Password',
  },
];

export default function AddTask() {
  return (
    <form className="container is-max-tablet">
      {formControls.map(({ name, label, type }) => (
        <div className="field" key={name}>
          <label htmlFor={name} className="label">
            {label}
          </label>
          <div className="control">
            <input type={type} className="input" name={name} id={name} />
          </div>
        </div>
      ))}
      <div className="field">
        <div className="control">
          <button className="button">Add Task</button>
        </div>
      </div>
    </form>
  );
}
