document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("image");
  const imagePreviewContainer = document.getElementById(
    "imagePreviewContainer"
  );
  const imagePreview = document.getElementById("imagePreview");
  const fetchLocationBtn = document.getElementById("fetchLocation");
  const locationInput = document.getElementById("location");
  const reportForm = document.getElementById("reportForm");
  const successMessage = document.getElementById("successMessage");

  // Image Validation & Preview
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB.");
        fileInput.value = ""; // Clear file input
        imagePreviewContainer.style.display = "none"; // Hide preview
        return;
      }

      // Validate file type (only images)
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        fileInput.value = "";
        imagePreviewContainer.style.display = "none";
        return;
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreviewContainer.style.display = "block"; // Show preview
      };

      reader.readAsDataURL(file);
    } else {
      imagePreviewContainer.style.display = "none"; // Hide preview
    }
  });

  // GPS Location Fetching
  fetchLocationBtn.addEventListener("click", function () {
    if ("geolocation" in navigator) {
      fetchLocationBtn.textContent = "Fetching...";
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          locationInput.value = `Lat: ${latitude}, Lng: ${longitude}`;
          fetchLocationBtn.textContent = "Get Location";
        },
        function (error) {
          alert("Error fetching location: " + error.message);
          fetchLocationBtn.textContent = "Get Location";
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });

  // Form Submission Validation
  reportForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Check if image is uploaded
    if (!fileInput.files.length) {
      alert("Please upload an image of the pothole.");
      return;
    }

    // Check if location is available
    if (!locationInput.value.trim()) {
      alert("Please fetch your location before submitting.");
      return;
    }

    // Show success message
    successMessage.style.display = "block";
    successMessage.textContent = "Pothole report submitted successfully!";

    // Clear form after submission
    reportForm.reset();
    imagePreviewContainer.style.display = "none"; // Hide preview
  });
});
