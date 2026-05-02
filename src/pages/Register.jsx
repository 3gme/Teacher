import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";
import RegisterTextSection from "../components/RegisterTextSection";

function Register() {
  // TODO: Implement actual registration logic
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e.target.username.value, e.target.password.value);
  // }

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

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 lg:grid-cols-[2fr_1.05fr] pt-10">
        <RegisterForm />
        <RegisterTextSection />
      </div>
    </main>
  );
}

export default Register;
