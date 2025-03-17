document.addEventListener("DOMContentLoaded", () => {
  const reportList = document.getElementById("reportList");

  // Sample reports data (Replace with real data later)
  let reports = [
    {
      id: 1,
      image: "assets/images/pothole1.jpg",
      location: "Main Street, City",
      status: "Pending",
    },
    {
      id: 2,
      image: "assets/images/pothole2.jpg",
      location: "Market Road, City",
      status: "Pending",
    },
  ];

  function loadReports() {
    reportList.innerHTML = "";
    reports.forEach((report) => {
      let row = document.createElement("tr");
      row.innerHTML = `
                <td>${report.id}</td>
                <td><img src="${report.image}" alt="Pothole" width="100"></td>
                <td>${report.location}</td>
                <td class="status">${report.status}</td>
                <td>
                    <button onclick="updateStatus(${report.id}, 'Verified')">Verify</button>
                    <button onclick="updateStatus(${report.id}, 'Resolved')">Resolve</button>
                    <button onclick="updateStatus(${report.id}, 'Rejected')">Reject</button>
                </td>
            `;
      reportList.appendChild(row);
    });
  }

  window.updateStatus = function (id, newStatus) {
    reports = reports.map((report) =>
      report.id === id ? { ...report, status: newStatus } : report
    );
    loadReports();
    alert(`Report ${id} status updated to: ${newStatus}`);
  };

  loadReports();
});
