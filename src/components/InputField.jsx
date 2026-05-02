function InputField({ gridLayout, field, error, register }) {
  const { id, label, type, placeholder } = field;

  return (
    <div
      className={`grid grid-cols-[${gridLayout?.mobile || "1fr"}] sm:grid-cols-[${gridLayout?.sm || "1fr"}] md:grid-cols-[${gridLayout?.md || "1fr"}] gap-2 items-center`}
    >
      <label
        htmlFor={id}
        className="mb-2 block cursor-pointer text-sm font-semibold text-ink-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100"
        {...register(field.id, field.useFormRegister)}
      />
      {error && <p className="text-sm text-red-700 font-semibold">{error}</p>}
    </div>
  );
}

// className="w-full rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100"

export default InputField;
