const inputClass =
  "w-full rounded-xl border border-primary-100 bg-white px-3 py-2 text-sm text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100";

const labelClass = "mb-2 block text-xs font-semibold uppercase text-ink-500";

function InputLabel({
  defaultValue,
  register,
  errorsMessage,
  type,
  label,
  className,
  rows,
}) {
  return (
    <label className={className}>
      <span className={labelClass}>{label}</span>
      {type === "textarea" && (
        <textarea
          defaultValue={defaultValue}
          rows={rows}
          className={inputClass}
          {...register}
        />
      )}
      {type && type != "textarea" && (
        <input
          type={type}
          defaultValue={defaultValue}
          className={inputClass}
          {...register}
        />
      )}
      {errorsMessage && <p className="text-red-500 text-sm">{errorsMessage}</p>}
    </label>
  );
}

export default InputLabel;
