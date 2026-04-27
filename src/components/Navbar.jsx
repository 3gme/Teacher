import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-primary text-primary-foreground">
      <div>
        <Link to="/" className="text-2xl font-bold">
          <Logo width={40} className="inline-block mr-2" />
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link
            to="/courses"
            className="text-primary-50 hover:text-primary-300"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-primary-50 hover:text-primary-300">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
