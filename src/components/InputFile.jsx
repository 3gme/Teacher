function InputFile({ label, register, errorsMessage, newCourse }) {
  return (
    <div className="w-full row-span-2">
      <label className="mb-2.5 block text-sm font-semibold uppercase tracking-[0.08em] text-ink-500">
        {label}
      </label>
      <input
        type="file"
        className="w-full cursor-pointer rounded-xl border border-dashed border-primary-100 bg-white px-6 py-4 text-base leading-6 text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100"
        {...register}
      />
      {errorsMessage && <p className="mt-2 text-sm text-red-500">{errorsMessage}</p>}
      <p className="mt-2 pl-2 text-sm leading-6 text-ink-400">
        Accepted file types: JPG, PNG, GIF
      </p>
      {!newCourse && (
        <p className="pl-2 text-sm leading-6 text-ink-400">
          Don't do anything if you don't want to change the image
        </p>
      )}
    </div>
  );
}

export default InputFile;
