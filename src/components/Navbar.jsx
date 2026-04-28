import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO: Replace with actual auth state
  const isLogin = true;

  const baseLinkClass =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200";

  const getLinkClass = ({ isActive }) =>
    `${baseLinkClass} ${
      isActive
        ? "bg-primary-800 text-white"
        : "text-primary-50 hover:bg-primary-800 hover:text-white"
    }`;

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-primary-800 bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
          onClick={handleCloseMenu}
        >
          <Logo width={36} className="inline-block" />
          <span className="hidden sm:inline">Teacher</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary-50 transition-colors hover:bg-primary-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <nav className="hidden items-center gap-2 md:flex">
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
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-100"
                onClick={handleCloseMenu}
              >
                Register
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/account"
              className={getLinkClass}
              onClick={handleCloseMenu}
            >
              Account
            </NavLink>
          )}
        </nav>
      </div>

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
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export default Navbar;
