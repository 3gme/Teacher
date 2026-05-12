import { FaPlus } from "react-icons/fa";
import InputField from "./InputField";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useModalContext } from "./Modal";

const fields = [
  {
    id: "sectionTitle",
    label: "Section title",
    placeholder: "e.g. Learn How To Learn",
    useFormRegister: {
      required: "Section title is required",
      minLength: { value: 2, message: "Minimum length is 5 characters" },
    },
  },
  {
    id: "orderIndex",
    label: "Order",
    placeholder: "e.g. 1",
    useFormRegister: {
      required: "Order is required",
      validate: (value) =>
        Number(value) > 0 || "Order must be a number greater than 0",
    },
  },
];

function AddSectionForm() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const { close } = useModalContext();

  return (
    <form className="space-y-4">
      {fields.map((field) => (
        <InputField
          key={field.id}
          field={field}
          register={register}
          error={errors[field.id]}
        />
      ))}
      <div className="flex items-center justify-end gap-4">
        <Button type="danger" onClick={close}>
          Cancel
        </Button>
        <Button
          className="flex items-center gap-2 cursor-pointer"
          isSubmit={true}
        >
          <FaPlus />
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddSectionForm;
