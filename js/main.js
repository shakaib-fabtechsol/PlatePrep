function displayToggle() {
    var x = document.getElementById('template-left');
    if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

const ctx = document.getElementById('db-task-overview');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Canceled', 'Pending', 'Completed'],
        datasets: [{
            label: '# of Tasks',
            data: [10, 10, 60],
            backgroundColor: [
                'rgba(255, 59, 48, 1)',
                'rgba(153, 195, 255, 1)',
                'rgba(1, 34, 65, 1)'
            ],
            rotation: 30,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false 
            },
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return percentage + '%';
                },
                color: '#fff',
                font: {
                    weight: 'normal',
                    size: 12
                },
                anchor: 'end',
                align: 'start',
            }
        }
    },
    plugins: [ChartDataLabels]
});
