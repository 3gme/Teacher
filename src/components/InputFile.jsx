function InputFile({ label, register, errorsMessage }) {
  return (
    <div className="w-full row-span-2">
      <label className="mb-2 block text-xs font-semibold uppercase text-ink-500">
        {label}
      </label>
      <input
        type="file"
        className="w-full rounded-xl border border-dashed border-primary-100 bg-white px-6 py-4 text-sm text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100 "
        {...register}
      />
      {errorsMessage && <p className="text-red-500 text-sm">{errorsMessage}</p>}
      <p className="text-sm text-ink-400 mt-2 pl-2">
        Accepted file types: JPG, PNG, GIF <br /> Don't do anything if you don't
        want to change the image
      </p>
    </div>
  );
}

export default InputFile;
