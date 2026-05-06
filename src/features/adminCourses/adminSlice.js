import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../../data/CoursesData.json";

const initialState = {
  selectedIds: {
    courseId: 1,
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

    addCourse: (state, action) => {
      state.courses.push(action.payload);
      state.selectedIds = {
        ...state.selectedIds,
        courseId: action.payload.courseId,
      };
    },

    updateCourse: (state, action) => {
      const selectedCourseId = state.selectedIds.courseId;
      const courseIndex = state.courses.findIndex(
        (course) => course.courseId === selectedCourseId,
      );
      state.courses[courseIndex] = {
        ...state.courses[courseIndex],
        ...action.payload,
      };
    },
  },
});

export const { setCourseId, addCourse, updateCourse } = adminSlice.actions;
export default adminSlice.reducer;
