document.addEventListener("DOMContentLoaded", function () {
  // Sample Data (To be replaced with actual fetched data)
  const reportData = {
    total: 120,
    resolved: 75,
    pending: 45,
  };

  // Update UI with stats
  document.getElementById("totalReports").textContent = reportData.total;
  document.getElementById("resolvedReports").textContent = reportData.resolved;
  document.getElementById("pendingReports").textContent = reportData.pending;

  // Chart.js Configuration
  const ctx = document.getElementById("potholeChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Resolved", "Pending"],
      datasets: [
        {
          data: [reportData.resolved, reportData.pending],
          backgroundColor: ["#4CAF50", "#FF5733"],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});
