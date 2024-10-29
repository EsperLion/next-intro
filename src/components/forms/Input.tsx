import clsx from 'clsx';

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  color?:
    | 'default'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  size?: 'small' | 'normal' | 'medium' | 'large';
  status?: 'hovered' | 'focused';
  rounded?: boolean;
  isStatic?: boolean;
  isLoading?: boolean;
};

export function Input({
  color = 'default',
  size = 'normal',
  rounded = false,
  isStatic = false,
  isLoading = false,
  className,
  type = 'text',
  ...inputProps
}: InputProps) {
  const classes = clsx(
    'input',
    `is-${color}`,
    `is-${size}`,
    rounded && 'is-rounded',
    isStatic && 'is-static',
    isLoading && 'is-loading',
    className,
  );

  return <input type={type} className={classes} {...inputProps} />;
}
