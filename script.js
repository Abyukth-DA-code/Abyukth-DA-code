// Toggle between sections
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

// Toggle theme for the analysis section
document.getElementById("themeToggleAnalysis").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Growth Chart for analysis section
if (document.getElementById('growthChart')) {
    let companyNames = ["Reliance Industries", "TCS", "Infosys", "HDFC Bank", "SBI", 
                        "Bharti Airtel", "L&T", "Mahindra & Mahindra", "Indian Oil Corporation", "Wipro", "Tata Motors"];
    let revenueGrowth = [12.5, 15.2, 10.8, 9.5, 11.3, 13.7, 9.8, 14.2, 8.5, 10.1, 12.5];

    let ctx = document.getElementById('growthChart').getContext('2d');
    let growthChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companyNames,
            datasets: [{
                label: 'Revenue Growth (%)',
                data: revenueGrowth,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff',
                                  '#ff9f40', '#ffcd56', '#4bc0c0', '#c9cbcf', '#e8c3b9']
            }]
        }
    });

    // Search functionality for Company Analysis
    document.getElementById("searchBoxAnalysis").addEventListener("input", function() {
        let searchValue = this.value.toLowerCase();
        growthChart.data.labels.forEach((label, index) => {
            let visibility = label.toLowerCase().includes(searchValue);
            growthChart.data.datasets[0].data[index] = visibility ? revenueGrowth[index] : 0;
        });
        growthChart.update();
    });
}

// Toggle theme for the analysis section
document.getElementById("themeToggleAnalysis1").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

if (document.getElementById('growthPredictionChart')) {
    let companyNames = ["Reliance Industries", "TCS", "Infosys", "HDFC Bank", "SBI", 
                        "Bharti Airtel", "L&T", "Mahindra & Mahindra", "Indian Oil Corporation", "Wipro", "Tata Motors"];
    let revenueGrowth = [12.0, 16.2, 15.8, 10.5, 10.0, 12.5, 9.8, 15.2, 10.5, 12.1, 11.5];

    let ctx = document.getElementById('growthPredictionChart').getContext('2d');
    let growthChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companyNames,
            datasets: [{
                label: 'Revenue Growth (%) Prediction in 2026',
                data: revenueGrowth,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff',
                                  '#ff9f40', '#ffcd56', '#4bc0c0', '#c9cbcf', '#e8c3b9']
            }]
        }
    });

    // Search functionality for Company Analysis
    document.getElementById("searchBoxAnalysis1").addEventListener("input", function() {
        let searchValue = this.value.toLowerCase();
        growthChart.data.labels.forEach((label, index) => {
            let visibility = label.toLowerCase().includes(searchValue);
            growthChart.data.datasets[0].data[index] = visibility ? revenueGrowth[index] : 0;
        });
        growthChart.update();
    });
}