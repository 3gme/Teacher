import { API_BASE_URL } from "./consts";

export async function login(data) {
  const { username, password } = data;
  // TODO: Implement actual login logic
  console.log(data);
  const myURL = `${API_BASE_URL}/api/Account/Login`;
  console.log(myURL);

  const res = await fetch(myURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password,
    }),
  });
  if (!res.ok) {
    throw new Error("Login failed");
  }
  const userToken = await res.json();

  return userToken;
}

export async function getUser(token) {
  console.log(token);
  const res = await fetch(`${API_BASE_URL}/api/Account/Login`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${JSON.stringify(token)}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const user = await res.json();
  console.log("from admin protector" + user);
  return user;
}
