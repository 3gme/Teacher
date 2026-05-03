import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../../data/CoursesData.json";

const initialState = {
  selectedIds: {
    courseId: null,
    sectionId: null,
    lessonId: null,
  },
  courses: coursesData,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setCourseId: (state, action) => {
      state.selectedIds = { ...state.selectedIds, courseId: action.payload };
    },
    updateCourse: (state, action) => {
      const { field, value } = action.payload;
      const course = state.courses.find(
        (course) => course.courseId === state.selectedIds.courseId,
      );
      if (course) {
        course[field] = value;
      }
    },
  },
});

export const { setCourseId, updateCourse } = adminSlice.actions;
export default adminSlice.reducer;
