import Button from "./Button";

function CourseHeader({ course }) {
  const { title, description, price, imageUrl, courseId } = course;

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img src={imageUrl} alt="course" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-ink-900">{title}</h1>
        <p className="text-ink-500 mt-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-primary-600">${price}</span>
          <div className="flex gap-4">
            <Button to="/courses" type="danger">
              Back
            </Button>
            <Button to={`/courses/${courseId}/enroll`} type="primary">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
