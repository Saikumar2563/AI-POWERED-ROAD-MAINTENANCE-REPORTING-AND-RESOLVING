document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Simulated authentication (Replace this with backend API)
    if (email === "user@example.com" && password === "password123") {
      alert("Login Successful!");
      window.location.href = "report.html"; // Redirect to Report Page
    } else {
      alert("Invalid email or password. Please try again.");
    }

    loginForm.reset();
  });
});
