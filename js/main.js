var options = {
    series: [{
    name: 'Użytkownicy w ciągu dnia',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Użytkownicy w nocy',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 250,
    type: 'area'
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