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
    type: 'categories',
    categories: [],
    labels: {
      formatter: function(val) {
        return dayjs(val).format('DD.MM.YYYY HH:mm');
      }
    }
  },
  legend: {
    position: 'bottom'
  },
  fill: {
    opacity: 1
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

function transformToFloat(str_num) {
  return str_num.replace(',', '.');
}

function fillDataToArr(node) {
  for (let i = 0; i < node.length; i++){
    innerData = node[i].querySelectorAll('td');
    options.xaxis.categories.push(new Date(innerData[0].innerHTML).getTime());


    options.series[0].data.push(transformToFloat(innerData[1].innerHTML));
    options.series[1].data.push(transformToFloat(innerData[2].innerHTML));
    options.series[2].data.push(transformToFloat(innerData[3].innerHTML));
    options.series[3].data.push(transformToFloat(innerData[4].innerHTML));
  }
}

function fillDataToChart() {
  const dataRows = document.querySelectorAll('.data');

  options.series.push({name: 'Агломерат ЗСМК крупный', data: []});
  options.series.push({name: 'Агломерат ЗСМК мелкий', data: []});
  options.series.push({name: 'Агломерат складской', data: []});
  options.series.push({name: 'Окатыши карельские НО', data: []});

  fillDataToArr(dataRows);
}

fillDataToChart();

chart.render();
