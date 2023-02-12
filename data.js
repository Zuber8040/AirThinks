

// https://api.thingspeak.com/channels/1944585/field/1.json



const dataArray = [];

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
			 console.log(index.field1)
		}))

		let created_at = (datapointss.feeds.map(function (index) {
			// return index.created_at;
			console.log(index.created_at);
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
		//console.log(options.series.name)


});
}
// updateChart();







//   fetch("https://api.thingspeak.com/channels/1944585/field/1.json").then((thingspeakData)=>{
// 	//   console.log(thingspeakData);
// 	  return thingspeakData.json();
// 	}).then((actualData)=>{
// 	// console.log(actualData)
// 		for(let i=0;i<actualData.feeds.length;i++){
// 			dataArray.push({x: actualData.feeds[i].created_at,y:actualData.feeds[i].field1});
// 			// dataPoints.push({x: value[0], y: });
// 		}
// 		console.log(dataArray);
		
// 	}).catch((error)=>{
// 		console.log(error)
// 	});



$.getJSON( "https://api.thingspeak.com/channels/1944585/field/1.json", function( data ) {
	$.each( data, function( key, val ) {
	for(let i=0;i<val.length;i++){
				let date_string = Date.parse(val[i].created_at);
				dataArray.push({x: date_string,y:val[i].field1});
			}
	});
	console.log(dataArray)
	chart.updateSeries([{
		name: 'Sales',
		data: dataArray
	  }])
  });
	


// window.onload = () => {
// var options = {
// 	series: [{
// 	  name: "Desktops",
// 	  data: dataArray,
//   }],
// 	chart: {
// 	height: 350,
// 	type: 'line',
// 	zoom: {
// 	  enabled: false
// 	}
//   },
//   dataLabels: {
// 	enabled: false
//   },
//   stroke: {
// 	curve: 'straight'
//   },
//   title: {
// 	text: 'Product Trends by Month',
// 	align: 'left'
//   },
//   grid: {
// 	row: {
// 	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
// 	  opacity: 0.5
// 	},
//   },
//   xaxis: {
// 	categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//   }
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();

// }








// var options = {
// 	chart: {
// 	  height: 380,
// 	  width: "100%",
// 	  type: "area",
// 	  animations: {
// 		initialAnimation: {
// 		  enabled: false
// 		}
// 	  }
// 	},
// 	series: [
// 	  {
// 		name: "Series 1",
// 		data: [
// 		  {
// 			x: "02-10-2017 GMT",
// 			y: 34
// 		  },
// 		  {
// 			x: "02-11-2017 GMT",
// 			y: 43
// 		  },
// 		  {
// 			x: "02-12-2017 GMT",
// 			y: 31
// 		  },
// 		  {
// 			x: "02-13-2017 GMT",
// 			y: 43
// 		  },
// 		  {
// 			x: "02-14-2017 GMT",
// 			y: 33
// 		  },
// 		  {
// 			x: "02-15-2017 GMT",
// 			y: 52
// 		  }
// 		]
// 	  }
// 	],
// 	
//   };
  
//   var chart = new ApexCharts(document.querySelector("#chart"), options);
  
//   chart.render();
  




// chart.updateSeries([{
// 	data: [{
// 		x: "02-02-2002",
// 		y: 44
// 	  }, {
// 		x: "12-02-2002",
// 		y: 51
// 	  }]
//   }])



var options = {
	chart: {
		height: 350,
		type: 'line',
	},
	dataLabels: {
		enabled: false
	},
	series: [],
	title: {
		text: 'Ajax Example',
	},
	noData: {
	  text: 'Loading...'
	},
	xaxis: {
		type: 'datetime',
	}

  }
  
  var chart = new ApexCharts(
	document.querySelector("#chart"),
	options
  );
  
  chart.render();




  

