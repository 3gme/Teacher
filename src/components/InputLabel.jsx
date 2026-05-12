const inputClass =
  "w-full rounded-xl border border-primary-100 bg-white px-4 py-3 text-base leading-6 text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100";

const labelClass =
  "mb-2.5 block text-sm font-semibold uppercase tracking-[0.08em] text-ink-500";

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
      {errorsMessage && <p className="mt-2 text-sm text-red-500">{errorsMessage}</p>}
    </label>
  );
}

export default InputLabel;
