

// https://api.thingspeak.com/channels/1944585/field/1.json



const dataArray = [];
const dataArray2=[];
const dataArray3=[];
const dataArray4=[];
const dataArray5=[];
const dataArray6=[];




$.getJSON( "https://api.thingspeak.com/channels/1944585/field/1.json", function( data ) {
	$.each( data, function( key, val ) {
	for(let i=0;i<val.length;i++){
				let date_string = Date.parse(val[i].created_at);
				dataArray.push({x: date_string,y:val[i].field1});
			}
	});
	console.log(dataArray)
	chart.updateSeries([{
		name: 'MQ 2 Data',
		data: dataArray
	  }])
  });




var options = {
	chart: {
			type: 'area',
			height: 350,
			zoom: {
			  autoScaleYaxis: true
			}
	},
	dataLabels: {
		enabled: false
	},
	series: [],
	title: {
		text: 'MQ 2 Data',
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






  $.getJSON( "https://api.thingspeak.com/channels/1944585/field/2.json", function( data ) {
	$.each( data, function( key, val ) {
	for(let i=0;i<val.length;i++){
				let date_string = Date.parse(val[i].created_at);
				dataArray2.push({x: date_string,y:val[i].field2});
			}
	});
	console.log(dataArray2)
	chart2.updateSeries([{
		name: 'MQ 9 Data',
		data: dataArray2
	  }])
  });

  var options2 = {
	chart: {
			type: 'area',
			height: 350,
			zoom: {
			  autoScaleYaxis: true
			}
	},
	dataLabels: {
		enabled: false
	},
	series: [],
	title: {
		text: 'MQ 9 Data',
	},
	noData: {
	  text: 'Loading...'
	},
	xaxis: {
		type: 'datetime',
	}
	
  }
  
  var chart2 = new ApexCharts(
	document.querySelector("#chart2"),
	options2);
	chart2.render();











	$.getJSON( "https://api.thingspeak.com/channels/1944585/field/3.json", function( data ) {
		$.each( data, function( key, val ) {
		for(let i=0;i<val.length;i++){
					let date_string = Date.parse(val[i].created_at);
					dataArray3.push({x: date_string,y:val[i].field3});
				}
		});
		console.log(dataArray3)
		chart3.updateSeries([{
			name: 'MQ 135 Data',
			data: dataArray3
		  }])
	  });
	
	  var options3 = {
		chart: {
				type: 'area',
				height: 350,
				zoom: {
				  autoScaleYaxis: true
				}
		},
		dataLabels: {
			enabled: false
		},
		series: [],
		title: {
			text: 'MQ 135 Data',
		},
		noData: {
		  text: 'Loading...'
		},
		xaxis: {
			type: 'datetime',
		}
		
	  }
	  
	  var chart3 = new ApexCharts(
		document.querySelector("#chart3"),
		options3);
		chart3.render();



		// chart4 

		$.getJSON( "https://api.thingspeak.com/channels/1944585/field/4.json", function( data ) {
			$.each( data, function( key, val ) {
			for(let i=0;i<val.length;i++){
						let date_string = Date.parse(val[i].created_at);
						dataArray4.push({x: date_string,y:val[i].field4});
					}
			});
			console.log(dataArray4)
			chart4.updateSeries([{
				name: 'MQ 136 Data',
				data: dataArray4
			  }])
		  });
		  var options4 = {
			chart: {
					type: 'area',
					height: 350,
					zoom: {
					  autoScaleYaxis: true
					}
			},
			dataLabels: {
				enabled: false
			},
			series: [],
			title: {
				text: 'MQ 136 Data',
			},
			noData: {
			  text: 'Loading...'
			},
			xaxis: {
				type: 'datetime',
			}
			
		  }
		  var chart4 = new ApexCharts(
			document.querySelector("#chart4"),
			options4);
			chart4.render();

				// chart  5

				$.getJSON( "https://api.thingspeak.com/channels/1944585/field/5.json", function( data ) {
					$.each( data, function( key, val ) {
					for(let i=0;i<val.length;i++){
								let date_string = Date.parse(val[i].created_at);
								dataArray5.push({x: date_string,y:val[i].field5});
							}
					});
					console.log(dataArray5)
					chart5.updateSeries([{
						name: 'Temperature',
						data: dataArray4
					  }])
				  });
				  var options5 = {
					chart: {
							type: 'area',
							height: 350,
							zoom: {
							  autoScaleYaxis: true
							}
					},
					dataLabels: {
						enabled: false
					},
					series: [],
					title: {
						text: 'Temperature',
					},
					noData: {
					  text: 'Loading...'
					},
					xaxis: {
						type: 'datetime',
					}
					
				  }
				  var chart5 = new ApexCharts(
					document.querySelector("#chart5"),
					options5);
					chart5.render();
	


					// chart 6 
					$.getJSON( "https://api.thingspeak.com/channels/1944585/field/6.json", function( data ) {
						$.each( data, function( key, val ) {
						for(let i=0;i<val.length;i++){
									let date_string = Date.parse(val[i].created_at);
									dataArray6.push({x: date_string,y:val[i].field6});
								}
						});
						console.log(dataArray6)
						chart6.updateSeries([{
							name: 'Humidity',
							data: dataArray6
						  }])
					  });
					  var options6 = {
						chart: {
								type: 'area',
								height: 350,
								zoom: {
								  autoScaleYaxis: true
								}
						},
						dataLabels: {
							enabled: false
						},
						series: [],
						title: {
							text: 'Humidity',
						},
						noData: {
						  text: 'Loading...'
						},
						xaxis: {
							type: 'datetime',
						}
						
					  }
					  var chart6 = new ApexCharts(
						document.querySelector("#chart6"),
						options6);
						chart6.render();