import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCourse } from "./adminSlice";
import InputLabel from "../../components/InputLabel";
import Modal, { useModalContext } from "../../components/Modal";
import InputFile from "../../components/InputFile";

function AddCourseModal() {
  // const courses = useSelector((state) => state.admin.courses);
  const { close } = useModalContext();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = (data) => {
    // const nextCourseId =
    //   courses.reduce(
    //     (largestCourseId, course) => Math.max(largestCourseId, course.courseId),
    //     0,
    //   ) + 1;

    dispatch(
      addCourse({
        // courseId: nextCourseId,
        title: data.title,
        price: Number(data.price),
        description: data.description,
        image: data.image[0] ? URL.createObjectURL(data.image[0]) : "",
        sections: [],
      }),
    );

    reset();
    close();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-ink-900">Add a new course</h2>
        {/* <p className="mt-2 text-sm text-ink-500">
          This form lives inside a compound-component modal.
        </p> */}
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
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

        <InputLabel
          type="number"
          label="Price"
          register={register("price", {
            required: "Price is required",
            min: {
              value: 1,
              message: "Price must be at least 1",
            },
          })}
          errorsMessage={errors.price?.message}
        />

        <InputFile
          type="text"
          label="Image URL"
          register={register("image")}
          newCourse={true}
          errorsMessage={errors.image?.message}
        />

        <InputLabel
          type="textarea"
          label="Description"
          rows={4}
          register={register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long",
            },
          })}
          errorsMessage={errors.description?.message}
        />

        <div className="flex justify-end gap-3 pt-2">
          <Modal.Close>
            <button
              type="button"
              className="rounded-xl border border-surface-200 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-surface-50"
            >
              Cancel
            </button>
          </Modal.Close>

          <button
            type="submit"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Create course
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourseModal;
