import { useForm } from "react-hook-form";
import InputField from "./InputField";
import Modal from "./Modal";
import Button from "./Button";

const fields = [
  {
    id: "title",
    label: "title",
    type: "text",
    placeholder: "title of the lesson",
  },
  {
    id: "orderIndex",
    label: "Order",
    type: "number",
    placeholder: "e.g. 1",
  },
];

function AddLessonModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-ink-900 mb-2">
        Add new lesson
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <InputField
            key={field.id}
            field={field}
            register={register}
            error={errors[field.id]}
          />
        ))}

        <div className="flex justify-end gap-3 pt-2">
          <Modal.Close>
            <Button type="secondary">Cancel</Button>
          </Modal.Close>
          <Button type="primary" isSubmit>
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddLessonModal;
