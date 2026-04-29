import { Link } from "react-router-dom";

function Button({ to, children, onClick, type = "primary" }) {
  const types = {
    primary:
      "bg-primary-600 text-white px-5 py-2 rounded-xl hover:bg-primary-700 font-semibold",
    secondary:
      "bg-secondary-600 text-white px-5 py-2 rounded-xl hover:bg-secondary-700 font-semibold",
    danger:
      "bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 font-semibold",
    green:
      "bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 font-semibold",
  };
  const classname = types[type] || types.primary;

  if (to)
    return (
      <Link to={to} className={classname}>
        {children}
      </Link>
    );

  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
