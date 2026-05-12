function InputField({ gridLayout, field, error, register }) {
  const { id, label, type, placeholder } = field;
  var reg;
  if (register) reg = register(field.id, field.useFormRegister);

  return (
    <div
      className={`grid grid-cols-[${gridLayout?.mobile || "1fr"}] sm:grid-cols-[${gridLayout?.sm || "1fr"}] md:grid-cols-[${gridLayout?.md || "1fr"}] gap-2 items-center`}
    >
      <label
        htmlFor={id}
        className=" block cursor-pointer text-md font-semibold text-ink-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100"
        {...reg}
      />
      {error && (
        <p className="text-sm font-semibold text-red-700">
          {error.message || error}
        </p>
      )}
    </div>
  );
}

export default InputField;
