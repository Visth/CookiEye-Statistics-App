var options = {
    series: [{
    name: 'Aktywni użytkownicy',
    data: [88, 40, 28, 51, 102, 109, 70]
  }, {
    name: 'Wystawiane posty',
    data: [22, 32, 45, 32, 34, 32, 41]
  }],
    chart: {
    height: 250,
    type: 'area',
    foreColor: '#fff'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2023-08-19T00:00:00.000Z", "2023-08-19T01:30:00.000Z", "2023-08-19T02:30:00.000Z", "2023-08-19T03:30:00.000Z", "2023-08-19T04:30:00.000Z", "2023-08-19T05:30:00.000Z", "2023-08-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

const actualDate = document.querySelector('.actual-date');

const date = new Date();
const year = date.getFullYear();

actualDate.textContent = year;