export function Block({
  children,
  className,
  ...restProps
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`block ${className}`} {...restProps}>
      {children}
    </div>
  );
}
