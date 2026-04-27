import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen text-3xl bg-gray-800 text-gray-300 ">
      Page not found
      <button
        className="ml-4 px-4 py-2 text-xl bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => navigation(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default PageNotFound;
