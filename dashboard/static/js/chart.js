const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: CHART_LABEL,
        datasets: [{
            label: '# of Votes',
            data: [0,5,1,1,1,0],
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


var timeline = document.getElementById('timelineChart');
var timelineChart = new Chart(timeline, {
    //線グラフ
    type: 'line',
    //データ
    data: {
        //各データの時間
        labels: ['09:00', '12:00', '15:00', '18:00', '21:00'],
        //データセット
        datasets: [{
            label: '体温',
            data: [25, 50, 35, 60, 0, 0],
            borderColor: 'rgba(255, 99, 132, 1)', //線の色
            backgroundColor: 'rgba(255, 99, 132, 0.1)' //塗りつぶしの色
        }]
    },
    //グラフ設定
    options: {
        //凡例は非表示
        legend: {
            display: false
        },
        scales: {
            //X軸
            xAxes: [{
                //軸ラベル表示
                scaleLabel: {
                    display: true,
                    labelString: '時間'
                },
                //ここで軸を時間を設定する
                type: 'time',
                time: {
                    parser: 'HH:mm',
                    unit: 'hour',
                    stepSize: 1,
                    displayFormats: {
                        'hour': 'HH:mm'
                    }
                },
                //X軸の範囲を指定
                ticks: {
                    min: '09:00',
                    max: '21:00'
                }
            }],
            //Y軸
            yAxes: [{
                //軸ラベル表示
                scaleLabel: {
                    display: true,
                    labelString: 'やる気'
                },
                //Y軸の範囲を指定
                ticks: {
                    min: 0,
                    max: 100
                }
            }]
        }
    }
});