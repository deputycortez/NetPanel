// File: frontend/assets/js/auth.js

const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      message.textContent = "Login successful!";
      message.style.color = "green";
      window.location.href = "./dashboard.html";
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
  }
});
