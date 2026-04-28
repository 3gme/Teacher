import LoginForm from "../features/auth/LoginForm";
import Navbar from "../components/Navbar";

// TODO: Implement actual login logic
function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.username.value, e.target.password.value);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-surface via-primary-50 to-secondary-100 px-6 py-10">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="absolute inset-0">
        <div className="absolute -left-12 top-16 h-48 w-48 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-secondary-200/60 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden lg:block">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-secondary-700">
              Smart classroom workspace
            </p>
            <h2 className="text-5xl font-bold leading-tight text-ink-900">
              Keep lessons, students, and teaching flow in one calm place.
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-ink-600">
              A focused teacher dashboard should feel clear and reliable. This
              sign-in space now leans into that with softer surfaces, stronger
              contrast, and a friendlier blue academic tone.
            </p> */}
            <div className="mt-8 flex gap-4">
              <div className="rounded-2xl border border-white/70 bg-white/70 px-5 py-4 text-sm text-ink-600 backdrop-blur-sm">
                Organized course access
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/70 px-5 py-4 text-sm text-ink-600 backdrop-blur-sm">
                Cleaner daily workflow
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center lg:justify-end">
          <LoginForm isRegister={false} handleSubmit={handleSubmit} />
        </section>
      </div>
    </main>
  );
}

export default Login;
