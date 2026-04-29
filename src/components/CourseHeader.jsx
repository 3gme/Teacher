function CourseHeader({ course }) {
  const { title, description, price, imageUrl } = course;

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img src={imageUrl} alt="course" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-ink-900">{title}</h1>
        <p className="text-ink-500 mt-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-primary-600">${price}</span>
          <button className="bg-primary-600 text-white px-5 py-2 rounded-xl hover:bg-primary-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
