// Function to handle logout
document.getElementById('logout-button').addEventListener('click', function() {
    // Perform logout operation here, such as redirecting to a logout page
    alert('Logout successful');
  });
  
    // Function to set the initial active section
    function setInitialSection() {
      // Get the hash from the URL
      var hash = window.location.hash;
      if (hash) {
        // Remove '#' from the hash
        var sectionId = hash.substring(1);
        // Show the corresponding section
        var section = document.getElementById(sectionId);
        if (section) {
          section.style.display = 'block';
        }
      }
    }
  // Function to set the initial active section
  function setInitialSection() {
      // Get the hash from the URL
      var hash = window.location.hash;
      if (hash) {
        // Remove '#' from the hash
        var sectionId = hash.substring(1);
        // Show the corresponding section
        var section = document.getElementById(sectionId);
        if (section) {
          section.style.display = 'block';
        }
      }
    }
    
    // Call the function to set the initial active section
    setInitialSection();
    document.addEventListener('DOMContentLoaded', () => {
      const videos = document.querySelectorAll('video');
      
      videos.forEach((video) => {
          video.addEventListener('ended', () => {
              alert(`You have finished watching: ${video.previousElementSibling.textContent}`);
              // Here you can add code to mark the video as watched, e.g., updating a database or localStorage
          });
      });
  });
  