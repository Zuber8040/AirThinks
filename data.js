const avgvalue1 =[];

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
       avgvalue1.push(index.field1);
      //  console.log(avgvalue1)
       
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const sensormq2time = document.querySelector(".sensormq2time");
			sensormq2time.innerHTML = localtime;
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
			sensormq9value.textContent = index.field2-3;
			// console.log(index.field1);
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			// console.log(localtime)
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
			sensormq135value.textContent = index.field3-4;
			// console.log(index.field3);
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			// console.log(localtime)
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
			sensormq136value.textContent = index.field4-10;
			
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

// Initialize the global variable
let lastValues1=[];
let lastValues2 = [];
let lastValues3 = [];
let lastValues4 = [];

  
// Define the API endpoints
const urls = [
  "https://api.thingspeak.com/channels/1944585/field/1.json",
  "https://api.thingspeak.com/channels/1944585/field/2.json",
  "https://api.thingspeak.com/channels/1944585/field/3.json",
  "https://api.thingspeak.com/channels/1944585/field/4.json",
];

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchAllData = async () => {
  const responses = await Promise.all(urls.map(url => fetchData(url)));
  const data = responses.map(res => res.feeds[0].field1);

  // Save the last value of field1 to the global variable
//   lastValues1 = responses.map(res => res.feeds[res.feeds.length - 1].field1);
//   lastValues2= responses.map(res => res.feeds[res.feeds.length - 1].field2);
//   lastValues3= responses.map(res => res.feeds[res.feeds.length - 1].field3);
// lastValues4 =responses.map(res => res.feeds[res.feeds.length - 1].field4);
console.log(data)
  return data;
};

const calculateAverage = (data) => {
  const total = data.reduce((acc, val) => acc + Number(val), 0);
  return total / data.length;
};

const main = async () => {
  const data = await fetchAllData();
  const average = calculateAverage(data);
console.log(average)

//   console.log(ans);
}
main();
