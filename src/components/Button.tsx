import clsx from 'clsx';

type ButtonProps = React.ComponentProps<'button'> & {
  color?:
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'white'
    | 'black';
  colorVariant?: 'light' | 'dark';
  size?: 'small' | 'normal' | 'medium' | 'large';
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  responsive?: boolean;
  fullWidth?: boolean;
  isStatic?: boolean;
  isLoading?: boolean;
  state?: 'hovered' | 'focused' | 'active';
  isDelete?: boolean;
};

export function Button({
  color,
  colorVariant,
  size = 'normal',
  outlined,
  inverted,
  rounded,
  responsive,
  fullWidth,
  isStatic,
  isLoading,
  state,
  className,
  children,
  isDelete,
  ...buttonProps
}: ButtonProps) {
  const classes = clsx(
    'button',
    color && `is-${color}`,
    colorVariant && `is-${colorVariant}`,
    size && `is-${size}`,
    outlined && 'is-outlined',
    inverted && 'is-inverted',
    rounded && 'is-rounded',
    responsive && `is-responsive`,
    fullWidth && 'is-fullwidth',
    isStatic && 'is-static',
    isLoading && 'is-loading',
    state && `is-${state}`,
    isDelete && 'delete',
    className,
  );

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
