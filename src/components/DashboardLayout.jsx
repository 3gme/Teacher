import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBaseClass =
    "rounded-md px-3 py-2 text-md md:text-lg font-medium text-primary hover:bg-primary-100";

  const getLinkClass = ({ isActive }) =>
    isActive ? `${navBaseClass} bg-primary-100` : navBaseClass;

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen h-full relative">
      <button
        className="md:hidden fixed top-20 right-5 bg-secondary-100 rounded-lg px-4 py-2 text-sm font-medium text-secondary-700 hover:bg-secondary-200 hover:text-secondary-800 transition-colors cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-15 blur-lg z-0 md:hidden"
        />
      )}

      <aside
        className={`md:col-span-2 md:static md:translate-x-0 transition-all duration-150 absolute z-10 md:left-0 top-0 right-0 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} bg-secondary-100 md:px-8 md:py-8 sm:px-4 sm:py-4 p-2 h-full`}
      >
        <nav className="flex flex-col gap-3 h-full">
          <NavLink
            to="/dashboard"
            end
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/courses"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard/students"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Students
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Settings
          </NavLink>
        </nav>
      </aside>
      <main className="col-span-10 min-h-full pt-8 px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
