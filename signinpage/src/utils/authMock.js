const KEY = "fg_users"; // list of {email, password, username}

export function loadUsers() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}
export function saveUsers(users) {
  localStorage.setItem(KEY, JSON.stringify(users));
}

export function registerUser({ username, email, password }) {
  const users = loadUsers();
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, message: "Account already exists. Please log in." };
  }
  users.push({ username, email, password });
  saveUsers(users);
  return { ok: true };
}

export function findUser(email) {
  const users = loadUsers();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function loginUser({ email, password }) {
  const u = findUser(email);
  if (!u) return { ok: false, message: "No account found. Please sign up first." };
  if (u.password !== password) return { ok: false, message: "Incorrect password." };
  return { ok: true, user: u };
}
