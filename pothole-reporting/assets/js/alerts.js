document.addEventListener("DOMContentLoaded", function () {
  const alertsList = document.getElementById("alertsList");

  // Sample alerts data (this will be replaced with real data from the backend)
  const alerts = [
    {
      id: 1,
      message: "Your pothole report #101 has been Verified.",
      timestamp: "2025-03-01 10:00 AM",
    },
    {
      id: 2,
      message: "Your pothole report #102 is In Progress.",
      timestamp: "2025-03-01 11:30 AM",
    },
    {
      id: 3,
      message: "Your pothole report #103 has been Resolved.",
      timestamp: "2025-03-02 08:15 AM",
    },
  ];

  function loadAlerts() {
    alertsList.innerHTML = ""; // Clear previous alerts

    if (alerts.length === 0) {
      alertsList.innerHTML = "<p>No alerts available.</p>";
      return;
    }

    alerts.forEach((alert) => {
      const alertItem = document.createElement("div");
      alertItem.classList.add("alert-item");
      alertItem.innerHTML = `
                <p><strong>${alert.message}</strong></p>
                <small>${alert.timestamp}</small>
            `;
      alertsList.appendChild(alertItem);
    });
  }

  // Simulate fetching alerts
  setTimeout(loadAlerts, 1000);
});
