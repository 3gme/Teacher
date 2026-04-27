import { Link } from "react-router-dom";
import Logo from "./Logo";

function LoginForm({ isRegister = false, handleSubmit }) {
  return (
    <form
      className="blue-shadow w-full max-w-md rounded-3xl border border-primary-100 bg-white/90 p-8 backdrop-blur-sm"
      onSubmit={handleSubmit}
    >
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50 ring-1 ring-primary-100">
          <Logo width={56} />
        </div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary-600">
          Teacher Portal
        </p>
        <h1 className="text-3xl font-bold text-ink-900">
          {isRegister ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-ink-500">
          {isRegister
            ? "Join your learning space and keep classes, notes, and progress in one place."
            : "Sign in to manage lessons, track students, and keep your classroom organized."}
        </p>
      </div>

      <label
        htmlFor="username"
        className="mb-2 cursor-pointer text-sm font-semibold text-ink-700 mr-1.5"
      >
        Username
      </label>
      <input
        id="username"
        type="text"
        required
        placeholder="Username"
        className="mb-5 rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-ink-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100"
      />

      <label
        htmlFor="password"
        className="mb-2 cursor-pointer text-sm font-semibold text-ink-700 mr-1.5"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        required
        minLength={6}
        placeholder="Password"
        className="mb-6 rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-ink-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary-100"
      />

      <button
        type="submit"
        className="cursor-pointer rounded-2xl bg-primary px-4 py-3 font-semibold text-primary-foreground transition duration-300 hover:bg-primary-700"
      >
        {isRegister ? "Register" : "Login"}
      </button>

      {!isRegister && (
        <p className="mt-4 text-center text-sm text-ink-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-secondary hover:text-secondary-700"
          >
            Register
          </Link>
        </p>
      )}

      {isRegister && (
        <p className="mt-4 text-center text-sm text-ink-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-secondary hover:text-secondary-700"
          >
            Login
          </Link>
        </p>
      )}
    </form>
  );
}

export default LoginForm;
