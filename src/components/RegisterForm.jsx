import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import InputField from "./InputField";
import Button from "./Button";

const fields = [
  {
    id: "fname",
    label: "First name",
    type: "text",
    placeholder: "",
    useFormRegister: {
      required: "First name is required",
      minLength: {
        value: 2,
        message: "First name must be at least 3 characters",
      },
    },
  },
  {
    id: "mname",
    label: "Middle name",
    type: "text",
    placeholder: "",
    useFormRegister: {
      required: "Middle name is required",
      minLength: {
        value: 2,
        message: "Middle name must be at least 3 characters",
      },
    },
  },
  {
    id: "lname",
    label: "Last name",
    type: "text",
    placeholder: "",
    useFormRegister: {
      required: "Last name is required",
      minLength: {
        value: 2,
        message: "Last name must be at least 3 characters",
      },
    },
  },
  {
    id: "phoneNumber",
    label: "Phone number",
    type: "tel",
    placeholder: "01012345678",
    useFormRegister: { required: "Phone number is required" },
  },
  {
    id: "gov",
    label: "Governorate",
    type: "text",
    placeholder: "",
    useFormRegister: { required: "Governorate is required" },
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "",
    useFormRegister: { required: "City is required" },
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "student@example.com",
    useFormRegister: {
      required: "Email is required",
      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
    },
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    useFormRegister: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
    type: "password",
    placeholder: "••••••••",
    useFormRegister: {
      required: "Please confirm your password",
    },
  },
];

function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="order-2 flex justify-center lg:order-1 lg:justify-start">
      <div className="blue-shadow w-full max-w-2xl rounded-3xl border border-primary-100 bg-white/90 p-6 backdrop-blur-sm sm:p-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50 ring-1 ring-primary-100">
            <Logo width={56} />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary-600">
            Teacher Portal
          </p>
          <h1 className="text-3xl font-bold text-ink-900">
            Create your account
          </h1>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink-500">
            Add your contact, student, and location details to start learning
            with your teacher.
          </p>
        </div>

        {/* <form className="space-y-7">
          {fieldGroups.map((group) => (
            <fieldset key={group.title}>
              <legend className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
                {group.title}
              </legend>

              <div className="grid gap-4 sm:grid-cols-2">
                {group.fields.map((field) => (
                  <div
                    key={field.id}
                    className={
                      group.title === "Location" ? "sm:col-span-1" : ""
                    }
                  >
                    <label
                      htmlFor={field.id}
                      className="mb-2 block cursor-pointer text-sm font-semibold text-ink-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                      required
                      minLength={field.minLength}
                      placeholder={field.placeholder}
                      className="w-full rounded-2xl border border-primary-100 bg-surface px-4 py-3 text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-primary focus:ring-4 focus:ring-primary-100"
                    />
                  </div>
                ))}
              </div>
            </fieldset>
          ))}
        </form> */}
        <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <InputField
              gridLayout={"1fr_2fr_1fr"}
              field={{
                ...field,
                useFormRegister:
                  field.id === "confirmPassword"
                    ? {
                        ...field.useFormRegister,
                        validate: (value) =>
                          value === getValues("password") ||
                          "Passwords do not match",
                      }
                    : field.useFormRegister,
              }}
              error={errors[field.id]?.message}
              register={register}
              key={field.id}
            />
          ))}
          <Button type="submit" className="mt-8 w-full" isSubmit={true}>
            Register
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-ink-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-secondary hover:text-secondary-700"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterForm;
