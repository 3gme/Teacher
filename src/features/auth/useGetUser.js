export default function useGetUser() {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  try {
    return JSON.parse(user);
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return null;
  }
}
