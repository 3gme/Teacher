import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputField from "./InputField";
import Button from "./Button";
import Modal, { useModalContext } from "./Modal";
import { updateSection } from "../features/adminCourses/adminSlice";

const fields = [
  {
    id: "title",
    label: "title",
    type: "text",
    placeholder: "e.g. Daily routines",
    useFormRegister: {
      required: "title is required",
      minLength: {
        value: 2,
        message: "title must be at least 2 characters long",
      },
    },
  },
  {
    id: "orderIndex",
    label: "Order",
    type: "number",
    placeholder: "e.g. 1",
    useFormRegister: {
      required: "Order is required",
      valueAsNumber: true,
      validate: (value) => Number(value) > 0 || "Order must be greater than 0",
    },
  },
];

function EditModal({ section, lesson }) {
  const title = section ? section.title : lesson.title;
  const orderIndex = section ? section.orderIndex : lesson.orderIndex;
  const dispatch = useDispatch();
  const { close } = useModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      orderIndex: orderIndex,
    },
  });

  const onSubmit = (data) => {
    section &&
      dispatch(
        updateSection({
          sectionId: section.sectionId,
          title: data.title,
          orderIndex: data.orderIndex,
        }),
      );
    lesson &&
      dispatch(
        updateSection({
          lessonId: lesson.lessonId,
          title: data.title,
          orderIndex: data.orderIndex,
        }),
      );
    close();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-ink-900">
          Edit {section?.title || lesson?.title}
        </h2>
        <p className="mt-2 text-sm text-ink-500">
          Update the {section?.title || lesson?.title} title and order.
        </p>
      </div>

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

export default EditModal;
