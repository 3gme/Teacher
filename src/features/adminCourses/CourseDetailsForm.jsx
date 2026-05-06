import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "./adminSlice";
import InputLabel from "../../components/InputLabel";
import InputFile from "../../components/InputFile";

function CourseDetailsForm() {
  const selectedCourseId = useSelector(
    (state) => state.admin.selectedIds.courseId,
  );
  const coursesData = useSelector((state) => state.admin.courses);
  const dispatch = useDispatch();
  const { title, price, description } =
    coursesData.find((course) => course.courseId === selectedCourseId) || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    console.log(selectedCourseId);
    dispatch(
      updateCourse({
        ...data,
        price: Number(data.price),
      }),
    );
  };

  const handleCancel = () => {
    reset();
  };
  return (
    <article className="rounded-2xl border border-surface-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-ink-800">
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

        <div className="w-full flex gap-2 col-span-2 justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Save changes
          </button>
        </div>
      </form>
    </article>
  );
}

export default CourseDetailsForm;
