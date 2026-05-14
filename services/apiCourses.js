import { API_BASE_URL } from "./consts";

async function addCourseApi(courseData) {
  const { title, description, price, image } = courseData;
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  const searchParams = new URLSearchParams({
    Title: title,
    Description: description,
    Price: String(price),
  });
  const myURL = `${API_BASE_URL}/api/Courses?${searchParams.toString()}`;
  const formData = new FormData();

  if (image instanceof File) {
    formData.append("Image", image);
  }

  const data = await fetch(myURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
    body: formData,
  });

  if (!data.ok) {
    const errorText = await data.text();
    throw new Error(errorText || "Failed to add course");
  }
  console.log(data);
  console.log(await data.json());
}

async function getCoursesApi() {
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  const myURL = `${API_BASE_URL}/api/Courses`;

  const res = await fetch(myURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to fetch courses");
  }

  const courses = await res.json();
  console.log(courses);
  return courses;
}

async function deleteCourseApi(courseId) {
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  const myURL = `${API_BASE_URL}/api/Courses/${courseId}`;

  const res = await fetch(myURL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to delete course");
  }
}

export { addCourseApi, getCoursesApi, deleteCourseApi };
