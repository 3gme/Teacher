import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import useUpdateSection from "../features/adminCourses/useUpdateSection";
import Button from "./Button";
import InputField from "./InputField";
import Modal, { useModalContext } from "./Modal";
import useUpdateLesson from "../features/adminCourses/useUpdateLesson";

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

const UrlField = {
  id: "videoUrl",
  label: "Video URL",
  type: "text",
  placeholder: "e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  useFormRegister: {
    required: "Video URL is required",
  },
};

function EditModal({ section, lesson }) {
  const [searchParams] = useSearchParams();
  const { close } = useModalContext();

  const courseId = searchParams.get("courseId");
  const title = section ? section.title : lesson.title;
  const orderIndex = section ? section.orderIndex : lesson.orderIndex;
  const vidUrl = lesson ? lesson.videoUrl : "";

  console.log(lesson);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      orderIndex: orderIndex,
      videoUrl: vidUrl,
    },
  });

  const { updateSection } = useUpdateSection(courseId, close);
  const { updateLesson } = useUpdateLesson(close);

  const onSubmit = (data) => {
    if (section) {
      console.log("Editing section with data:", data);
      const updatedSection = {
        sectionId: section.sectionId,
        courseId,
        ...data,
      };
      updateSection(updatedSection);
    } else if (lesson) {
      console.log("Editing lesson with data:", data);
      const updatedLesson = {
        lessonId: lesson.lessonId,
        ...data,
      };
      updateLesson(updatedLesson);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-ink-900">Edit {title}</h2>
        <p className="mt-2 text-sm text-ink-500">
          Update the {title} title and order.
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
        {lesson && (
          <InputField
            field={UrlField}
            register={register}
            error={errors[UrlField.id]}
          />
        )}

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
