import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  const navBaseClass =
    "rounded-md px-3 py-2 text-md md:text-lg font-medium text-primary hover:bg-primary-100";

  const getLinkClass = ({ isActive }) =>
    isActive ? `${navBaseClass} bg-primary-100` : navBaseClass;

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen h-full">
      <aside className="col-span-3 rounded-lg bg-secondary-100 px-8 py-8 h-full">
        <nav className="flex flex-col gap-3 h-full">
          <NavLink to="/dashboard/" className={getLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/courses" className={getLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/dashboard/students" className={getLinkClass}>
            Students
          </NavLink>
          <NavLink to="/dashboard/settings" className={getLinkClass}>
            Settings
          </NavLink>
        </nav>
      </aside>
      <main className="col-span-9 min-h-full pt-8 px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
