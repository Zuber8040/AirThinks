
// https://api.thingspeak.com/channels/


// https://api.thingspeak.com/channels/276330/charts/7?title=Soil%20Moisture&color=FF69B4&width=850&xaxis=Time



function updateChart(){
  async function fetchData(){
    const url = 'https://api.thingspeak.com/channels/1944585/field/1.json';
    const response =await fetch(url);
    // wait until the request has completed
    const datapoints  = await response.json();
    // console.log
    // console.log(datapoints);  
    return datapoints;
  };

    fetchData().then(datapoints=>{
      let field12 = (datapoints.feeds.map(function(index){
        return index.field1
      }))
      // console.log(field12)
  
      let created_at = (datapoints.feeds.map(function(index){
        return index.created_at
      }))
      // console.log(created_at)

      lineChart.config.data.labels=created_at;
      lineChart.config.data.datasets[0].data=field12;
      lineChart.update();


  })
}
updateChart();



// setup
// const data ={
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [{
//     // date and time
//     label: '# of Votes',
//     // data 
//     data: [12, 19, 3, 5, 2, 3],
//     borderWidth: 1
//   }]
// };


// config

// const config = {
//   type: 'line',
//     data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       },
//       responsive:true
//     }
// }


// render init block 

// const lineChart = new Chart(document.getElementById('lineChart'),config);

// // 2nd lineChart
// const lineChart2 = new Chart(document.getElementById('lineChart2'),config);

// // // 3rd
// const lineChart3 = new Chart(document.getElementById('lineChart3'),config);

// // // 4th
// const lineChart4 = new Chart(document.getElementById('lineChart4'),config);
 
// // // 5th 
// const lineChart5 = new Chart(document.getElementById('lineChart5'),config);

// // // 6th
// const lineChart6 = new Chart(document.getElementById('lineChart6'),config);


let chart = c3.generate({
  data: {
      x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 340, 200, 500, 250, 350]
      ]
  },
  axis: {
      x: {
          type: 'timeseries',
          tick: {
              format: '%Y-%m-%d'
          }
      }
  }
});

setTimeout(function () {
  chart.load({
      columns: [
          ['data3', 400, 500, 450, 700, 600, 500]
      ]
  });
}, 1000);






