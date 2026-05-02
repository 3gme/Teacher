function InputField({ gridLayout, field, error, register }) {
  // gridLayout={"1fr_2fr_1fr"}
  const { id, label, type, minLength, placeholder } = field;
  const gridTemplateColumns = gridLayout?.replaceAll("_", " ");

  return (
    <div
      className="grid gap-2 items-center"
      style={gridTemplateColumns ? { gridTemplateColumns } : undefined}
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
        minLength={minLength}
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
