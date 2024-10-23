type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...restProps }: InputProps) {
  return <input {...restProps} />;
}
