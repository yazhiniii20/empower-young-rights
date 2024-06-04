document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
      document.getElementById("profileName").textContent = user.name;
      document.getElementById("profileEmail").textContent = user.email;
    } else {
      alert("No user data found. Please sign in.");
      window.location.href = "LoginPage.html";
    }
  
    document.getElementById("updateProfileBtn").addEventListener("click", () => {
      const newPassword = document.getElementById("newPassword").value;
      const newEmail = document.getElementById("newEmail").value;
  
      if (newPassword) {
        user.password = newPassword;
      }
      if (newEmail) {
        user.email = newEmail;
        document.getElementById("profileEmail").textContent = newEmail;
      }
  
      localStorage.setItem("user", JSON.stringify(user));
      alert("Profile updated successfully!");
    });
  
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("Logged out successfully!");
      window.location.href = "LoginPage.html";
    });
  });
  