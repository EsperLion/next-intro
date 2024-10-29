export function Box({
  children,
  className,
  ...restProps
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`box ${className}`} {...restProps}>
      {children}
    </div>
  );
}
