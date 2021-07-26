var options = {
    series: [],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [],
    labels: {
      date: 'dd/MM/yyyy HH:mm'
    }
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

var chart = new ApexCharts(document.querySelector("#chart"), options);

function fillDataToArr(node) {
  for (let i = 0; i < node.length; i++){
    innerData = node[i].querySelectorAll('td');

    options.series[0].data.push(innerData[1].innerHTML);
    options.series[1].data.push(innerData[2].innerHTML);
    options.series[2].data.push(innerData[3].innerHTML);
    options.series[3].data.push(innerData[4].innerHTML);
  }
}

function fillDatetime(node) {
  for (let i = 0; i < node.length; i++){
    innerData = node[i].querySelectorAll('td');
    console.log(innerData);
    options.xaxis.categories.push(new Date(innerData[0].innerHTML).getTime());

  }
}

function fillDataToChart() {
  const dataRows = document.querySelectorAll('.data'),
        headRow = document.querySelectorAll('.head');

  options.series.push({name: 'Агломерат ЗСМК крупный', data: []});
  options.series.push({name: 'Агломерат ЗСМК мелкий', data: []});
  options.series.push({name: 'Агломерат складской', data: []});
  options.series.push({name: 'Окатыши карельские НО', data: []});

  fillDatetime(dataRows);
  fillDataToArr(dataRows);
}

fillDataToChart();

chart.render();