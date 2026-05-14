import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import ConfirmationModal from "../../components/ConfirmationModal";
import InputFile from "../../components/InputFile";
import InputLabel from "../../components/InputLabel";
import Modal, { useModalContext } from "../../components/Modal";
import useDeleteCourse from "./useDeleteCourse";

function CourseDetailsForm({ course }) {
  const { courseId, title, price, description } = course || {};
  const { close } = useModalContext();
  const { deleteCourse } = useDeleteCourse(close);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleDelete = () => {
    deleteCourse(courseId);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    console.log(courseId);
  };

  const handleCancel = () => {
    reset();
  };
  return (
    <article className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm lg:p-6">
      <div className="mb-6 flex items-center gap-2 text-base font-semibold text-ink-800">
        <FaEdit className="text-primary-600" />
        Course details
      </div>

      <form
        className="lg:grid flex flex-col gap-4 grid-cols-1 lg:grid-cols-2"
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
      >
        <InputLabel
          defaultValue={title}
          type="text"
          label="Title"
          register={register("title", {
            required: "Title is required",
            minLength: {
              value: 2,
              message: "Title must be at least 2 characters long",
            },
          })}
          errorsMessage={errors.title?.message}
        />

        <InputFile
          label="Image"
          register={register("image")}
          errorsMessage={errors.image?.message}
        />

        <InputLabel
          defaultValue={price}
          type="number"
          label="Price"
          register={register("price", {
            required: "Price is required",
            min: {
              value: 0,
              message: "Price cannot be negative",
            },
            validate: {
              positive: (value) =>
                value > 0 || "Price must be a positive number",
            },
          })}
          errorsMessage={errors.price?.message}
        />

        <InputLabel
          defaultValue={description}
          type="textarea"
          label="Description"
          className="lg:col-span-2 col-span-1"
          rows={3}
          register={register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long",
            },
          })}
          errorsMessage={errors.description?.message}
        />

        <div className="col-span-2 flex w-full items-center justify-end gap-2">
          {!courseId && (
            <p className="mr-auto text-base text-red-500">
              Choose a course to edit its details
            </p>
          )}
          <div className="flex items-center justify-end gap-2">
            <Modal.Open opens="delete-course">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-100 bg-white px-4 py-3 text-base font-semibold text-red-600 transition hover:bg-red-50"
                onClick={handleDelete}
                disabled={!courseId}
              >
                Delete
              </button>
            </Modal.Open>
            <Modal.Window name="delete-course">
              <ConfirmationModal
                ButtonContent="Delete Course"
                Header="Delete Course"
                message={`Are you sure you want to delete ${title}`}
                onDelete={handleDelete}
              />
            </Modal.Window>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white transition hover:bg-primary-700"
              onClick={handleCancel}
              disabled={!courseId}
            >
              Cancel
            </button>
            <Modal.Open opens="save-changes">
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-white transition hover:bg-primary-700"
                disabled={!courseId}
              >
                Save changes
              </button>
            </Modal.Open>
          </div>
        </div>
      </form>
    </article>
  );
}

export default CourseDetailsForm;
