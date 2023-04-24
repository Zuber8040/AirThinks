


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
		  	
			let mq2val = document.querySelector(".sensormq2value");
			mq2val.innerHTML = index.field1;
			const per  = document.createTextNode(" %");
			mq2val.append(per);
   
       
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const dateStr = localtime;
			const date = new Date(dateStr);
			const options = { 
			weekday: undefined, 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric', 
			hour12: true, 
			timeZoneName: undefined
			};
			const formattedDate = date.toLocaleString('en-US', options);
			// console.log(formattedDate); // "April 18, 2023, 9:57:13 PM"


			const sensormq2time = document.querySelector(".sensormq2time");
			sensormq2time.innerHTML = formattedDate;
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
		  	
			let sensormq9value = document.querySelector(".sensormq9value");
			sensormq9value.textContent = index.field2-3;
			const per  = document.createTextNode(" %");
			sensormq9value.append(per);
   
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const dateStr = localtime;
			const date = new Date(dateStr);
			const options = { 
			weekday: undefined, 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric', 
			hour12: true, 
			timeZoneName: undefined
			};
			const formattedDate = date.toLocaleString('en-US', options);
			
			const sensormq9time = document.querySelector(".sensormq9time");
			sensormq9time.innerHTML = formattedDate;
			
		
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
		  
			let sensormq135value = document.querySelector(".sensormq135value");
			sensormq135value.textContent = index.field3-3;
			const per  = document.createTextNode(" %");
			sensormq135value.append(per);
			console.log(sensormq135value);

		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const dateStr = localtime;
			const date = new Date(dateStr);
			const options = { 
			weekday: undefined, 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric', 
			hour12: true, 
			timeZoneName: undefined
			};
			const formattedDate = date.toLocaleString('en-US', options);
			
			const sensormq135time = document.querySelector(".sensormq135time");
			sensormq135time.innerHTML = formattedDate;
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
		  	
			let sensormq136value = document.querySelector(".sensormq136value");
			sensormq136value.textContent = index.field4-10;
			const per  = document.createTextNode("%");
			sensormq136value.append(per);

				
	
	

		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const dateStr = localtime;
			const date = new Date(dateStr);
			const options = { 
			weekday: undefined, 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric', 
			hour12: true, 
			timeZoneName: undefined
			};
			const formattedDate = date.toLocaleString('en-US', options);

			// const sensormq136time = document.querySelector(".sensormq136time");
			// sensormq136time.innerHTML =formattedDate;
			
			const update2 = document.querySelector(".update2");
			update2.innerHTML=formattedDate;

			
			
			

		}))
		// below 5 green above red  or good
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
		  	
			let Temperature = document.querySelector(".Temperature");
			Temperature.textContent = index.field5;
			Temperature.style.color = '#1B98F5'
			const per  = document.createTextNode("°C");
			Temperature.append(per);

		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			
			const dateStr = localtime;
			const date = new Date(dateStr);
			const options = { 
			weekday: undefined, 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric', 
			hour12: true, 
			timeZoneName: undefined
			};
			const formattedDate = date.toLocaleString('en-US', options);
			const update = document.querySelector(".update");
			update.innerHTML=formattedDate;
			const TemperatureVAL = document.querySelector(".TemperatureVAL");
			TemperatureVAL.innerHTML = formattedDate;
			TemperatureVAL.style.color = '#1B98F5'
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
		  	
			let Humidity = document.querySelector(".Humidity");
			Humidity.textContent = index.field6;
			Humidity.style.color ='#FF6263';			
			
		}))
		let created_at = (datapoints.feeds.map(function(index){
			const isotime = index.created_at;
			const localtime = new Date(isotime).toLocaleString();
			const dateStr = localtime;
			const date = new Date(dateStr);
			const options = { 
			weekday: undefined, 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric', 
			hour12: true, 
			timeZoneName: undefined
			};
			const formattedDate = date.toLocaleString('en-US', options);

			const HumidityTime = document.querySelector(".HumidityTime");
			HumidityTime.innerHTML = formattedDate;
			HumidityTime.style.color ='#FF6263';
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

//   Save the last value of field1 to the global variable
  lastValues1 = responses.map(res => res.feeds[res.feeds.length - 1].field1);
  lastValues2= responses.map(res => res.feeds[res.feeds.length - 1].field2);
 lastValues3= responses.map(res => res.feeds[res.feeds.length - 1].field3);
 lastValues4 =responses.map(res => res.feeds[res.feeds.length - 1].field4);

let v1 = lastValues1[0];
let v1num = Number(v1);

let v2 = lastValues2[1];
let v2num = Number(v2);

let v3 = lastValues3[2];
let v3num = Number(v3);

let v4 = lastValues4[3];
let v4num = Number(v4);

// mq9 3-> 5
// mq136 ->

let ans =(v1num)+(v2num-3)+(v3num-4);
let ansfinal = ans/3;

let ans_final2 = Math.floor(ansfinal);


let avgval2 = document.querySelector(".avgval2");
avgval2.innerHTML = ans_final2;


const h1 = document.querySelector("#main-heading");
const h2 = document.querySelector("#main-heading2");

if(ans_final2<=10){
	h1.style.backgroundColor = "#34a12b";
	h1.innerHTML = 'Good'
}
else if(ans_final2>11 && ans_final2<=20){
	h1.style.backgroundColor = "#d4cc0f";
	h1.innerHTML = 'Moderate'
}
else if(ans_final2>21&& ans_final2<=40){
	h1.style.backgroundColor = "#e9572a";
	h1.innerHTML = 'Poor'
}
else if(ans_final2>41&&ans_final2<=60){
	h1.style.backgroundColor = "#ec4d9f";
	h1.innerHTML = 'Unhealthy'
}
else if(ans_final2>61&&ans_final2<=80){
	h1.style.backgroundColor = "#9858a2";
	h1.innerHTML = 'Severe';
}
else if(ans_final2>81){
	h1.style.backgroundColor = "#c11e2f";
	h1.innerHTML = 'Hazardous';
}

if(v4num<=5){
	h2.style.backgroundColor = "#34a12b";
	h2.innerHTML = '<5% ~ Good'
}
else{
	h2.style.backgroundColor = "#c11e2f";
	h2.innerHTML = '>5% ~ Hazardous'
}

return lastValues1[0];
};



const main = async () => {
  const data = await fetchAllData();

}
main();

