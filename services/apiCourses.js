import { API_BASE_URL } from "./consts";

/**
 * ----------------------
 * COURSES API CALLS
 * ----------------------
 */

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

async function getCourseByIdApi(courseId) {
  console.log(courseId);
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  const myURL = `${API_BASE_URL}/api/Courses/${courseId}`;

  const res = await fetch(myURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to fetch course details");
  }

  const courseDetails = await res.json();
  return courseDetails;
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

async function updateCourseApi(courseData) {
  const { courseId } = courseData;
  const sessionTokenRaw = localStorage.getItem("sessionToken");

  const myURL = `${API_BASE_URL}/api/Courses/${courseId}`;
  const bodyData = JSON.stringify(courseData);

  const data = await fetch(myURL, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
    body: bodyData,
  });

  if (!data.ok) {
    const errorText = await data.text();
    throw new Error(errorText || "Failed to edit course");
  }
}

/**
 * ----------------------
 * SECTIONS API CALLS
 * ----------------------
 */

async function addSectionApi(sectionData) {
  const { courseId, title, orderIndex } = sectionData;
  const sessionTokenRaw = localStorage.getItem("sessionToken");

  const myURL = `${API_BASE_URL}/api/Courses/${courseId}/Sections`;
  const bodyData = JSON.stringify({ title, orderIndex, courseId });

  const res = await fetch(myURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
    body: bodyData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to add section");
  }
}

async function deleteSectionApi(courseId, sectionId) {
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  console.log(courseId, sectionId);
  const myURL = `${API_BASE_URL}/api/Courses/${courseId}/Sections/${sectionId}`;

  const res = await fetch(myURL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to delete section");
  }
}

async function updateSectionApi(sectionData) {
  const { sectionId, title, orderIndex, courseId } = sectionData;
  const sessionTokenRaw = localStorage.getItem("sessionToken");

  const myURL = `${API_BASE_URL}/api/Courses/${courseId}/Sections/${sectionId}`;
  const bodyData = JSON.stringify({ title, orderIndex, sectionId });

  const res = await fetch(myURL, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
    body: bodyData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to update section");
  }
}

export {
  addCourseApi,
  getCoursesApi,
  deleteCourseApi,
  updateCourseApi,
  addSectionApi,
  getCourseByIdApi,
  updateSectionApi,
  deleteSectionApi,
};
