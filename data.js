
// https://api.thingspeak.com/channels/1944585/field/1.json




function updateChart() {
	async function fetchData() {
		const url = 'https://api.thingspeak.com/channels/1944585/field/1.json';
		const response = await fetch(url);
		// wait until the request has completed
		const datapointss = await response.json();
		// console.log(datapoints);  
		return datapointss;
	};
	fetchData().then(datapointss => {
		let field12 = (datapointss.feeds.map(function (index) {
			return index.field1
			//  console.log(index.field1)
		}))
		let created_at = (datapointss.feeds.map(function (index) {

			return index.created_at;

			// console.log(index.created_at);
			let year = index.created_at.slice(0,4);
			// console.log(year);

			let month  = index.created_at.slice(6,7);
			// console.log(month);

			let day = index.created_at.slice(8,10);
			// console.log(day);

			let hours = index.created_at.slice(11,13)
			// console.log(hours);

			let minutes = index.created_at.slice(14,16);
			// console.log(minutes);


			let datee = new Date(year,month,day,hours,minutes);
			// console.log(datee);
			// return index.created_at
			// let new_dat = Date.parse(index.created_at);
			// 	console.log(new_dat);
			// // let changed = new Date(new_dat);
			// console.log(changed);
		}))
		// let a = new Date(1501048673000);
		// console.log(a);
		//console.log(created_at) 
		// lineChart.config.data.labels=created_at;
		// lineChart.config.data.datasets[0].data=field12;
		// lineChart.update();
		console.log(options.series.name)
});
}
// updateChart();


var options = {
	chart: {
	  type: 'line'
	},
	series: [{
	  name: 'sales',
	  data: [30,40,35,50,49,60,70,91,125]
	}],
	xaxis: {
	  categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
	}
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();




