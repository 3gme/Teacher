import Logo from "./Logo";

function LoginText() {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50 ring-1 ring-primary-100">
        <Logo width={56} />
      </div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary-600">
        Teacher Portal
      </p>
      <h1 className="text-3xl font-bold text-ink-900">Welcome back</h1>
      <p className="mt-2 text-sm leading-6 text-ink-500">
        Sign in to manage lessons, track students, and keep your classroom
        organized.
      </p>
    </div>
  );
}

export default LoginText;
