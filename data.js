// https://api.thingspeak.com/channels/1944585/field/1.json

const dataArray = [];
const dataArray2 = [];
const dataArray3 = [];
const dataArray4 = [];
const dataArray5 = [];
const dataArray6 = [];	

$.getJSON(
  "https://api.thingspeak.com/channels/1944585/field/1.json",
  function (data) {
    $.each(data, function (key, val) {
      for (let i = 0; i < val.length; i++) {
        let date_string = Date.parse(val[i].created_at);
        dataArray.push({ x: date_string, y: val[i].field1 });
      }
    });
    // console.log(dataArray);
    chart.updateSeries([
      {
        name: "MQ 2 Data",
        data: dataArray,
      },
    ]);
  }
);

var options = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  title: {
    text: "MQ 2 Data",
  },
  noData: {
    text: "Loading...",
  },
  xaxis: {
    type: "datetime",
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

$.getJSON(
  "https://api.thingspeak.com/channels/1944585/field/2.json",
  function (data) {
    $.each(data, function (key, val) {
      for (let i = 0; i < val.length; i++) {
        let date_string = Date.parse(val[i].created_at);
        dataArray2.push({ x: date_string, y: val[i].field2 });
      }
    });
    // console.log(dataArray2);
    chart2.updateSeries([
      {
        name: "MQ 9 Data",
        data: dataArray2,
      },
    ]);
  }
);

var options2 = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  title: {
    text: "MQ 9 Data",
  },
  noData: {
    text: "Loading...",
  },
  xaxis: {
    type: "datetime",
  },
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

$.getJSON(
  "https://api.thingspeak.com/channels/1944585/field/3.json",
  function (data) {
    $.each(data, function (key, val) {
      for (let i = 0; i < val.length; i++) {
        let date_string = Date.parse(val[i].created_at);
        dataArray3.push({ x: date_string, y: val[i].field3 });
      }
    });
    // console.log(dataArray3);
    chart3.updateSeries([
      {
        name: "MQ 135 Data",
        data: dataArray3,
      },
    ]);
  }
);

var options3 = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  title: {
    text: "MQ 135 Data",
  },
  noData: {
    text: "Loading...",
  },
  xaxis: {
    type: "datetime",
  },
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();

// chart4

$.getJSON(
  "https://api.thingspeak.com/channels/1944585/field/4.json",
  function (data) {
    $.each(data, function (key, val) {
      for (let i = 0; i < val.length; i++) {
        let date_string = Date.parse(val[i].created_at);
        dataArray4.push({ x: date_string, y: val[i].field4 });
      }
    });
    // console.log(dataArray4);
    chart4.updateSeries([
      {
        name: "MQ 136 Data",
        data: dataArray4,
      },
    ]);
  }
);
var options4 = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  title: {
    text: "MQ 136 Data",
  },
  noData: {
    text: "Loading...",
  },
  xaxis: {
    type: "datetime",
  },
};
var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();

// chart  5

$.getJSON(
  "https://api.thingspeak.com/channels/1944585/field/5.json",
  function (data) {
    $.each(data, function (key, val) {
      for (let i = 0; i < val.length; i++) {
        let date_string = Date.parse(val[i].created_at);
        dataArray5.push({ x: date_string, y: val[i].field5 });
      }
    });
    // console.log(dataArray5);
    chart5.updateSeries([
      {
        name: "Temperature",
        data: dataArray4,
      },
    ]);
  }
);
var options5 = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  title: {
    text: "Temperature",
  },
  noData: {
    text: "Loading...",
  },
  xaxis: {
    type: "datetime",
  },
};
var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
chart5.render();


$.getJSON(
  "https://api.thingspeak.com/channels/1944585/field/6.json",
  function (data) {
    $.each(data, function (key, val) {
      for (let i = 0; i < val.length; i++) {
        let date_string = Date.parse(val[i].created_at);
        dataArray6.push({ x: date_string, y: val[i].field6 });
      }
    });
    // console.log(dataArray6);
    chart6.updateSeries([
      {
        name: "Humidity",
        data: dataArray6,
      },
    ]);
  }
);
var options6 = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [],
  title: {
    text: "Humidity",
  },
  noData: {
    text: "Loading...",
  },
  xaxis: {
    type: "datetime",
  },
};
var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart6.render();


function updatedata1(){
	async function fetchData(){
	  const url = 'https://api.thingspeak.com/channels/1944585/field/1.json';
	  const response =await fetch(url);
	  // wait until the request has completed
	  const datapoints  = await response.json();
	  return datapoints;
	};
	  fetchData().then(datapoints=>{
		let field12 = (datapoints.feeds.map(function(index){
		  	// console.log(index.field1)
			let mq2val = document.querySelector(".sensormq2value");
			mq2val.innerHTML = index.field1;
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const sensormq2time = document.querySelector(".sensormq2time");
			sensormq2time.innerHTML = localtime;
		//   return index.created_at
		}))
	
		
  
  
	})
  }
updatedata1();


function updatedata2(){
	async function fetchData(){
	  const url = 'https://api.thingspeak.com/channels/1944585/field/2.json';
	  const response =await fetch(url);
	  // wait until the request has completed
	  const datapoints  = await response.json();
	  return datapoints;
	};
	  fetchData().then(datapoints=>{
		let field12 = (datapoints.feeds.map(function(index){
		  	// console.log(index.field1)
			let sensormq9value = document.querySelector(".sensormq9value");
			sensormq9value.textContent = index.field2;
			console.log(index.field1);
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			console.log(localtime)
			const sensormq9time = document.querySelector(".sensormq9time");
			sensormq9time.innerHTML = localtime;
			
			const updatetime = document.querySelector(".update");
			updatetime.innerHTML = localtime;
		//   return index.created_at
		}))
		
  
		
  
  
	})
  }
updatedata2();


function updatedata3(){
	async function fetchData(){
	  const url = 'https://api.thingspeak.com/channels/1944585/field/3.json';
	  const response =await fetch(url);
	  // wait until the request has completed
	  const datapoints  = await response.json();
	  return datapoints;
	};
	  fetchData().then(datapoints=>{
		let field12 = (datapoints.feeds.map(function(index){
		  	// console.log(index.field1)
			let sensormq135value = document.querySelector(".sensormq135value");
			sensormq135value.textContent = index.field3;
			console.log(index.field3);
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			console.log(localtime)
			const sensormq135time = document.querySelector(".sensormq135time");
			sensormq135time.innerHTML = localtime;
		//   return index.created_at
		}))
		
  
		
  
  
	})
  }
updatedata3();



function updatedata4(){
	async function fetchData(){
	  const url = 'https://api.thingspeak.com/channels/1944585/field/4.json';
	  const response =await fetch(url);
	  // wait until the request has completed
	  const datapoints  = await response.json();
	  return datapoints;
	};
	  fetchData().then(datapoints=>{
		let field12 = (datapoints.feeds.map(function(index){
		  	// console.log(index.field1)
			let sensormq136value = document.querySelector(".sensormq136value");
			sensormq136value.textContent = index.field4;
			
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			// console.log(localtime)
			const sensormq136time = document.querySelector(".sensormq136time");
			sensormq136time.innerHTML = localtime;
		//   return index.created_at
		}))
  
	})
  }
updatedata4();


function updatedata5(){
	async function fetchData(){
	  const url = 'https://api.thingspeak.com/channels/1944585/field/5.json';
	  const response =await fetch(url);
	  // wait until the request has completed
	  const datapoints  = await response.json();
	  return datapoints;
	};
	  fetchData().then(datapoints=>{
		let field12 = (datapoints.feeds.map(function(index){
		  	// console.log(index.field1)
			let Temperature = document.querySelector(".Temperature");
			Temperature.textContent = index.field5;
			
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			// console.log(localtime)
			const TemperatureVAL = document.querySelector(".TemperatureVAL");
			TemperatureVAL.innerHTML = localtime;
		//   return index.created_at
		}))
  
	})
  }
updatedata5();

function updatedata6(){
	async function fetchData(){
	  const url = 'https://api.thingspeak.com/channels/1944585/field/6.json';
	  const response =await fetch(url);
	  // wait until the request has completed
	  const datapoints  = await response.json();
	  return datapoints;
	};
	  fetchData().then(datapoints=>{
		let field12 = (datapoints.feeds.map(function(index){
		  	// console.log(index.field1)
			let Humidity = document.querySelector(".Humidity");
			Humidity.textContent = index.field6;
			
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			// console.log(localtime)
			const HumidityTime = document.querySelector(".HumidityTime");
			HumidityTime.innerHTML = localtime;
		//   return index.created_at
		}))
  
	})
  }
updatedata6();
