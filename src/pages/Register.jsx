import LoginForm from "../features/auth/LoginForm";
import Navbar from "../components/Navbar";

function Register() {
  // TODO: Implement actual registration logic
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.username.value, e.target.password.value);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-secondary-50 via-surface to-primary-100 px-6 py-10">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-secondary-200/55 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-primary-200/55 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <LoginForm isRegister={true} handleSubmit={handleSubmit} />
        </section>

        <section className="order-1 lg:order-2">
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary-700">
              Join the platform
            </p>
            <h2 className="text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
              Build your teaching hub with a bright, welcoming start.
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-ink-600">
              The register page now mirrors the same classroom-friendly blue
              system while feeling a little more energetic and inviting for new
              users.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary-100 bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-primary-700">
                  Faster onboarding
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  A clearer layout helps users understand where to start.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary-100 bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-secondary-700">
                  Consistent branding
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  The new semantic palette keeps the auth flow aligned with the
                  site.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
