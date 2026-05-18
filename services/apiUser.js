import { API_BASE_URL } from "./consts";

export async function login(data) {
  const { username, password } = data;
  const myURL = `${API_BASE_URL}/api/Account/Login`;

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
  const user = await res.json();

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
}

export async function registerApi(data) {
  const bodyData = JSON.stringify(data);
  const myURL = `${API_BASE_URL}/api/Account/Register`;

  console.log(bodyData);

  const res = await fetch(myURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    console.error(
      "Register API error response:",
      errorData,
      "status:",
      res.status,
    );
    const message =
      (errorData &&
        (errorData.message || errorData.error || JSON.stringify(errorData))) ||
      "Registration failed";
    throw new Error(message);
  }

  const user = await res.json();
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
}

export async function refreshTokenApi() {
  const userToken = localStorage.getItem("sessionToken");
  if (!userToken) {
    return null;
  }
  const myURL = `${API_BASE_URL}/api/Account/refreshToken`;

  const res = await fetch(myURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // include cookies so server-side HttpOnly refresh token is sent
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Token refresh failed");
  }

  const responseText = await res.text();
  const data = responseText ? JSON.parse(responseText) : null;

  console.log("Token refresh response:", data);

  const nextToken = data?.token || data?.accessToken || data?.sessionToken;
  if (nextToken) {
    localStorage.setItem("sessionToken", nextToken);
  }

  if (data?.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
}

export async function logoutApi() {
  const myURL = `${API_BASE_URL}/api/Account/revokeToken`;
  const sessionTokenRaw = localStorage.getItem("sessionToken");
  const res = await fetch(myURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionTokenRaw}`,
    },
    // include cookies so server-side can clear HttpOnly refresh token
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Logout failed");
  }

  localStorage.removeItem("user");
  localStorage.removeItem("sessionToken");
}
