import { API_BASE_URL } from "./consts";

// async function addCourseApi(courseData) {
//   const { title, description, price, image } = courseData;
//   const sessionTokenRaw = localStorage.getItem("sessionToken");
//   const searchParams = new URLSearchParams({
//     Title: title,
//     Description: description,
//     Price: String(price),
//   });
//   const myURL = `${API_BASE_URL}/api/Courses?${searchParams.toString()}`;
//   const formData = new FormData();

//   if (image instanceof File) {
//     formData.append("Image", image);
//   }

//   const data = await fetch(myURL, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${sessionTokenRaw}`,
//     },
//     body: formData,
//   });

//   if (!data.ok) {
//     const errorText = await data.text();
//     throw new Error(errorText || "Failed to add course");
//   }
// }

async function addCourseApi(courseData) {
  const { title, description, price, image } = courseData;
  const sessionTokenRaw = localStorage.getItem("sessionToken");

  const formData = new FormData();
  formData.append("Title", title);
  formData.append("Description", description);
  formData.append("Price", String(price));

  if (image instanceof File) {
    formData.append("Image", image); // real file bytes
  }

  const res = await fetch(`${API_BASE_URL}/api/Courses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
      // Do NOT set Content-Type manually with FormData
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
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

async function editCourseApi(courseId, courseData) {
  const { title, description, price, image } = courseData;
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  const searchParams = new URLSearchParams({
    Title: title,
    Description: description,
    Price: String(price),
  });
  const myURL = `${API_BASE_URL}/api/Courses/${courseId}?${searchParams.toString()}`;
  const formData = new FormData();

  if (image instanceof File) {
    formData.append("Image", image);
  }

  const data = await fetch(myURL, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
    body: formData,
  });

  if (!data.ok) {
    const errorText = await data.text();
    throw new Error(errorText || "Failed to edit course");
  }
}

export { addCourseApi, getCoursesApi, deleteCourseApi, editCourseApi };
