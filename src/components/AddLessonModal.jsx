import { useForm } from "react-hook-form";
import InputField from "./InputField";
import Modal, { useModalContext } from "./Modal";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import useAddLesson from "../features/adminCourses/useAddLesson";

const fields = [
  {
    id: "title",
    label: "title",
    type: "text",
    placeholder: "title of the lesson",
    registerOptions: { required: "Title is required" },
  },
  {
    id: "orderIndex",
    label: "Order",
    type: "number",
    placeholder: "e.g. 1",
    registerOptions: {
      required: "Order index is required",
      valueAsNumber: true,
      min: { value: 1, message: "Order index must be at least 1" },
    },
  },
  {
    id: "videoUrl",
    label: "Video URL",
    type: "text",
    placeholder: "URL of the video",
    registerOptions: { required: "Video URL is required" },
  },
];

function AddLessonModal({ sectionId }) {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");

  const { close } = useModalContext();

  const { addLesson } = useAddLesson(courseId, close);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addLesson({ sectionId, ...data });
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
