export const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow border bg-white ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
