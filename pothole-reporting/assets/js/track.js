document.addEventListener("DOMContentLoaded", function () {
  const trackForm = document.getElementById("trackForm");
  const reportStatusContainer = document.getElementById(
    "reportStatusContainer"
  );
  const reportStatusText = document.getElementById("reportStatus");

  // Simulated report status data (in real case, this will be fetched from the backend)
  const reportData = {
    12345: ["Pending", "Verified", "Resolved"],
    67890: ["Pending", "Processing", "Resolved"],
  };

  // Function to get report status
  trackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const reportId = document.getElementById("reportId").value.trim();

    if (!reportId) {
      alert("Please enter a valid Report ID.");
      return;
    }

    if (reportData[reportId]) {
      const statusArray = reportData[reportId];
      const currentStatusIndex = Math.min(
        Math.floor(Math.random() * statusArray.length),
        statusArray.length - 1
      );
      const status = statusArray[currentStatusIndex];

      reportStatusText.textContent = `Your report status: ${status}`;
      reportStatusContainer.classList.remove("hidden");
    } else {
      reportStatusText.textContent =
        "Invalid Report ID. Please check and try again.";
      reportStatusContainer.classList.remove("hidden");
    }
  });
});
