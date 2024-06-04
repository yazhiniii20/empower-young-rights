const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

document.getElementById("signupBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // Save user data to local storage
  localStorage.setItem("user", JSON.stringify({ name, email, password }));

  alert("Sign up successful! You can now sign in.");
  container.classList.remove("right-panel-active");
});

document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login successful!");
    window.location.href = "nav.html"; // Redirect to navigation page
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

