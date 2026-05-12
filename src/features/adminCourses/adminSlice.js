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

    deleteCourse: (state, action) => {
      console.log(action);
      state.courses = state.courses.filter(
        (course) => course.courseId !== action.payload.courseId,
      );
      state.selectedIds.courseId = null;
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

    updateSection: (state, action) => {
      const selectedCourseId = state.selectedIds.courseId;
      const courseIndex = state.courses.findIndex(
        (course) => course.courseId === selectedCourseId,
      );

      if (courseIndex === -1) return;

      const sectionIndex = state.courses[courseIndex].sections.findIndex(
        (section) => section.sectionId === action.payload.sectionId,
      );

      if (sectionIndex === -1) return;

      state.courses[courseIndex].sections[sectionIndex] = {
        ...state.courses[courseIndex].sections[sectionIndex],
        title: action.payload.title,
        orderIndex: Number(action.payload.orderIndex),
      };
    },

    deleteSection: (state, action) => {
      const selectedCourseId = state.selectedIds.courseId;
      const courseIndex = state.courses.findIndex(
        (course) => course.courseId === selectedCourseId,
      );

      if (courseIndex === -1) return;

      state.courses[courseIndex].sections = state.courses[
        courseIndex
      ].sections.filter((section) => section.sectionId !== action.payload);
    },
  },
});

export const {
  setCourseId,
  addCourse,
  updateCourse,
  deleteCourse,
  updateSection,
  deleteSection,
} = adminSlice.actions;
export default adminSlice.reducer;
