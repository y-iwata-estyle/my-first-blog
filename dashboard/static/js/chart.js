const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: CHART_LABEL,
        datasets: [{
            label: '# of Votes',
            data: CHART_DATA,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const doughnut = document.getElementById('doughnutChart');
const doughnutChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['red', 'green', 'blue'],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['#f88', '#484', '#48f'],
        }],
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom',
            },
        }
    }
});