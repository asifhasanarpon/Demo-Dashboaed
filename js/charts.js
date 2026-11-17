/**
 * Material Dashboard 2 - Chart.js Configurations
 * Ultra-Aesthetic emerald green curves & modern Plus Jakarta typography
 */

let websiteViewsChartInstance = null;
let dailySalesChartInstance = null;
let completedTasksChartInstance = null;
let countryShareChartInstance = null;

document.addEventListener('DOMContentLoaded', function () {
  const commonFont = {
    family: "'Plus Jakarta Sans', sans-serif",
    size: 11,
    weight: '600'
  };

  const commonGrid = {
    color: 'rgba(226, 232, 240, 0.6)',
    borderDash: [5, 5],
    drawBorder: false,
    drawTicks: false
  };

  // -------------------------------------------------------------
  // Chart 1: Website Views (Bar Chart)
  // -------------------------------------------------------------
  const ctxWebsiteViews = document.getElementById('websiteViewsChart');
  if (ctxWebsiteViews) {
    const ctx = ctxWebsiteViews.getContext('2d');
    const greenGradient = ctx.createLinearGradient(0, 0, 0, 180);
    greenGradient.addColorStop(0, '#22c55e');
    greenGradient.addColorStop(1, '#16a34a');

    websiteViewsChartInstance = new Chart(ctxWebsiteViews, {
      type: 'bar',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'Views',
          data: [48, 42, 18, 22, 50, 60, 75],
          backgroundColor: greenGradient,
          borderRadius: 8,
          borderSkipped: false,
          maxBarThickness: 18
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 12, family: "'Plus Jakarta Sans', sans-serif", weight: 'bold' },
            bodyFont: { size: 12, family: "'Plus Jakarta Sans', sans-serif" },
            padding: 10,
            cornerRadius: 10,
            displayColors: false,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 50,
              color: '#94a3b8',
              font: commonFont,
              padding: 8
            },
            grid: commonGrid,
            border: { display: false }
          },
          x: {
            ticks: {
              color: '#94a3b8',
              font: commonFont,
              padding: 6
            },
            grid: { display: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 2: Daily Sales (Line Chart)
  // -------------------------------------------------------------
  const ctxDailySales = document.getElementById('dailySalesChart');
  if (ctxDailySales) {
    const ctx = ctxDailySales.getContext('2d');
    const salesAreaGradient = ctx.createLinearGradient(0, 0, 0, 180);
    salesAreaGradient.addColorStop(0, 'rgba(34, 197, 94, 0.12)');
    salesAreaGradient.addColorStop(1, 'rgba(34, 197, 94, 0.0)');

    dailySalesChartInstance = new Chart(ctxDailySales, {
      type: 'line',
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
          label: 'Sales ($)',
          data: [150, 230, 380, 220, 420, 200, 100, 220, 450, 250, 400, 230],
          borderColor: '#22c55e',
          borderWidth: 2.5,
          pointBackgroundColor: '#22c55e',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 7,
          backgroundColor: salesAreaGradient,
          fill: true,
          tension: 0.38
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 12, family: "'Plus Jakarta Sans', sans-serif", weight: 'bold' },
            bodyFont: { size: 12, family: "'Plus Jakarta Sans', sans-serif" },
            padding: 10,
            cornerRadius: 10,
            displayColors: false,
            callbacks: {
              label: (context) => `$${context.raw}`
            }
          }
        },
        scales: {
          y: {
            min: 0,
            max: 600,
            ticks: {
              stepSize: 200,
              color: '#94a3b8',
              font: commonFont,
              padding: 8
            },
            grid: commonGrid,
            border: { display: false }
          },
          x: {
            ticks: {
              color: '#94a3b8',
              font: commonFont,
              padding: 6
            },
            grid: { display: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 3: Completed Tasks (Line Chart)
  // -------------------------------------------------------------
  const ctxCompletedTasks = document.getElementById('completedTasksChart');
  if (ctxCompletedTasks) {
    const ctx = ctxCompletedTasks.getContext('2d');
    const tasksAreaGradient = ctx.createLinearGradient(0, 0, 0, 180);
    tasksAreaGradient.addColorStop(0, 'rgba(34, 197, 94, 0.12)');
    tasksAreaGradient.addColorStop(1, 'rgba(34, 197, 94, 0.0)');

    completedTasksChartInstance = new Chart(ctxCompletedTasks, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Tasks',
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          borderColor: '#22c55e',
          borderWidth: 2.5,
          pointBackgroundColor: '#22c55e',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 7,
          backgroundColor: tasksAreaGradient,
          fill: true,
          tension: 0.38
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 12, family: "'Plus Jakarta Sans', sans-serif", weight: 'bold' },
            bodyFont: { size: 12, family: "'Plus Jakarta Sans', sans-serif" },
            padding: 10,
            cornerRadius: 10,
            displayColors: false
          }
        },
        scales: {
          y: {
            min: 0,
            max: 600,
            ticks: {
              stepSize: 200,
              color: '#94a3b8',
              font: commonFont,
              padding: 8
            },
            grid: commonGrid,
            border: { display: false }
          },
          x: {
            ticks: {
              color: '#94a3b8',
              font: commonFont,
              padding: 6
            },
            grid: { display: false },
            border: { display: false }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // Chart 4: Country Market Share (Doughnut Chart)
  // -------------------------------------------------------------
  const ctxCountryShare = document.getElementById('countryShareChart');
  if (ctxCountryShare) {
    countryShareChartInstance = new Chart(ctxCountryShare, {
      type: 'doughnut',
      data: {
        labels: ['Germany', 'USA', 'Great Britain', 'Brasil'],
        datasets: [{
          data: [44, 28, 18, 10],
          backgroundColor: ['#22c55e', '#0ea5e9', '#f59e0b', '#ec4899'],
          borderWidth: 3,
          borderColor: '#ffffff',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '74%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 9,
              font: commonFont,
              padding: 14
            }
          },
          tooltip: {
            backgroundColor: '#1e293b',
            padding: 9,
            cornerRadius: 9,
            callbacks: {
              label: (item) => ` ${item.label}: ${item.raw}%`
            }
          }
        }
      }
    });
  }
});

// Function to update chart data dynamically based on selected date range
function updateChartsForRange(range) {
  if (!websiteViewsChartInstance || !dailySalesChartInstance) return;

  if (range === 'today') {
    websiteViewsChartInstance.data.datasets[0].data = [48, 42, 18, 22, 50, 60, 75];
    dailySalesChartInstance.data.datasets[0].data = [150, 230, 380, 220, 420, 200, 100, 220, 450, 250, 400, 230];
  } else if (range === 'week') {
    websiteViewsChartInstance.data.datasets[0].data = [65, 80, 45, 60, 90, 85, 95];
    dailySalesChartInstance.data.datasets[0].data = [200, 290, 410, 310, 500, 300, 180, 310, 520, 340, 460, 310];
  } else if (range === 'month') {
    websiteViewsChartInstance.data.datasets[0].data = [82, 90, 70, 78, 95, 92, 100];
    dailySalesChartInstance.data.datasets[0].data = [310, 390, 480, 400, 560, 410, 290, 420, 590, 430, 520, 410];
  } else if (range === 'year') {
    websiteViewsChartInstance.data.datasets[0].data = [95, 100, 85, 92, 98, 94, 99];
    dailySalesChartInstance.data.datasets[0].data = [420, 490, 530, 480, 600, 490, 380, 500, 600, 520, 580, 510];
  }

  websiteViewsChartInstance.update();
  dailySalesChartInstance.update();
}
