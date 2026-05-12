import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginText from "../../components/LoginText";
import InputField from "../../components/InputField";

const submitButtonClassName =
  "cursor-pointer rounded-2xl bg-primary px-4 py-3 font-semibold text-primary-foreground transition duration-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary-300 disabled:text-primary-500";

function LoginForm({ handleSubmit, isLoading }) {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Admin@gmail.com",
      password: "Admin123@",
    },
  });

  return (
    <form
      className="blue-shadow w-full max-w-md rounded-3xl border border-primary-100 bg-white/90 p-8 backdrop-blur-sm"
      onSubmit={(e) => formSubmit(handleSubmit)(e)}
    >
      <LoginText />
      <div className="space-y-4 mb-4">
        <InputField
          field={{
            id: "username",
            label: "Username",
            type: "text",
            placeholder: "Username",
            useFormRegister: { required: "Username is required" },
          }}
          register={register}
          error={errors.username?.message}
        />
        <InputField
          field={{
            id: "password",
            label: "Password",
            type: "password",
            placeholder: "Password",
            useFormRegister: {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum length is 6" },
            },
          }}
          register={register}
          error={errors.password?.message}
        />
      </div>

      <button
        type="submit"
        className={submitButtonClassName}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>

      <p className="mt-4 text-center text-sm text-ink-500">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-secondary hover:text-secondary-700"
        >
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
