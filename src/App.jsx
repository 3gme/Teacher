import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Courses from "./pages/Courses";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseDetails from "./pages/CourseDetails";
import PaymentPage from "./pages/PaymentPage";
import Lessonage from "./pages/Lessonpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses/:id/:lessonId" element={<Lessonage />} />
          <Route path="/courses/:id/enroll" element={<PaymentPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
