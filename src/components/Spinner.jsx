function Spinner({ className = "" }) {
  return (
    <div
      className={`inline-block h-10 w-10 animate-spin rounded-full border-4 border-surface-200 border-t-primary-600 ${className}`.trim()}
      aria-label="Loading"
      role="status"
    />
  );
}

export default Spinner;
