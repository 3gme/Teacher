import { NavLink } from "react-router-dom";

function MainNavMobileMenu({ isMenuOpen, handleCloseMenu, isLogin }) {
  const baseLinkClass =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200";

  const getLinkClass = ({ isActive }) =>
    `${baseLinkClass} ${
      isActive
        ? "bg-primary-800 text-white"
        : "text-primary-50 hover:bg-primary-800 hover:text-white"
    }`;
  return (
    <div>
      {isMenuOpen ? (
        <nav className="border-t border-primary-800 bg-primary px-4 pb-4 pt-2 md:hidden sm:px-6">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/courses"
              className={getLinkClass}
              onClick={handleCloseMenu}
            >
              Courses
            </NavLink>
            {isLogin ? (
              <>
                <NavLink
                  to="/login"
                  className={getLinkClass}
                  onClick={handleCloseMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary-100"
                  onClick={handleCloseMenu}
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/account"
                  className={getLinkClass}
                  onClick={handleCloseMenu}
                >
                  Account
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={getLinkClass}
                  onClick={handleCloseMenu}
                >
                  Dashboard
                </NavLink>
              </>
            )}
          </div>
        </nav>
      ) : null}
    </div>
  );
}

export default MainNavMobileMenu;
