// File: frontend/assets/js/dashboard.js

(async () => {
  const greeting = document.getElementById("greeting");
  const roleInfo = document.getElementById("role");
  const logoutButton = document.getElementById("logout");

  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "./index.html"; // Redirect if not authenticated
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/dashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      greeting.textContent = `Welcome, ${data.username}!`;
      roleInfo.textContent = `Role: ${data.role}`;
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    alert("Session expired. Redirecting to login.");
    localStorage.clear();
    window.location.href = "./index.html";
  }

  logoutButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "./index.html";
  });
})();
