

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
	// var items = [];
	$.each( data, function( key, val ) {
	//   items.push( "<li id='" + key + "'>" + val + "</li>" );
			for(let i=0;i<val.length;i++){
				dataArray.push({x: val[i].created_at,y:val[i].field1});
			// console.log(val[i].created_at,val[i].field1);
		}
	});
   
	
  });
	
console.log(dataArray)


window.onload = () => {
var options = {
	series: [{
	  name: "Desktops",
	  data: dataArray,
  }],
	chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'straight'
  },
  title: {
	text: 'Product Trends by Month',
	align: 'left'
  },
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

}