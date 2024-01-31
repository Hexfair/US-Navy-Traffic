import WebSocket from 'ws';
import {data} from './ships.js'; 

const wss0 = new WebSocket("wss://stream.aisstream.io/v0/stream");
const wss1 = new WebSocket("wss://stream.aisstream.io/v0/stream");
const wss2 = new WebSocket("wss://stream.aisstream.io/v0/stream");
const wss3 = new WebSocket("wss://stream.aisstream.io/v0/stream");
const wss4 = new WebSocket("wss://stream.aisstream.io/v0/stream");

const arr = data.map(obj => String(obj.mmsi));
const divideArr = [];

for (let i = 0; i < arr.length; i = i + 50) {
	divideArr.push(arr.slice(i, i + 50));
}

wss0.onopen = function (_) {
	let subscriptionMessage = {
		 Apikey: "1",
		 BoundingBoxes: [[[-90, -180], [90, 180]]],
		 FiltersShipMMSI: [...divideArr[0]],
		 FilterMessageTypes: ["PositionReport"]
	}
	wss0.send(JSON.stringify(subscriptionMessage));

};

wss1.onopen = function (_) {
	let subscriptionMessage = {
		 Apikey: "1",
		 BoundingBoxes: [[[-90, -180], [90, 180]]],
		 FiltersShipMMSI: [...divideArr[1]],
		 FilterMessageTypes: ["PositionReport"]
	}
	wss1.send(JSON.stringify(subscriptionMessage));

};

wss2.onopen = function (_) {
	let subscriptionMessage = {
		 Apikey: "1",
		 BoundingBoxes: [[[-90, -180], [90, 180]]],
		 FiltersShipMMSI: [...divideArr[2]],
		 FilterMessageTypes: ["PositionReport"]
	}
	wss2.send(JSON.stringify(subscriptionMessage));

};

wss3.onopen = function (_) {
	let subscriptionMessage = {
		 Apikey: "2",
		 BoundingBoxes: [[[-90, -180], [90, 180]]],
		 FiltersShipMMSI: [...divideArr[3]],
		 FilterMessageTypes: ["PositionReport"]
	}
	wss3.send(JSON.stringify(subscriptionMessage));

};

wss4.onopen = function (_) {
	let subscriptionMessage = {
		 Apikey: "2",
		 BoundingBoxes: [[[-90, -180], [90, 180]]],
		 FiltersShipMMSI: [...divideArr[4]],
		 FilterMessageTypes: ["PositionReport"]
	}
	wss4.send(JSON.stringify(subscriptionMessage));

};


wss0.onmessage = function (event) {
	let aisMessage = JSON.parse(event.data)
	console.log('000000000000', aisMessage)
	//socket.terminate()
};

wss1.onmessage = function (event) {
	let aisMessage = JSON.parse(event.data)
	console.log('111111111111', aisMessage)
	//socket.terminate()
};

wss2.onmessage = function (event) {
	let aisMessage = JSON.parse(event.data)
	console.log('22222222222', aisMessage)
	//socket.terminate()
};

wss3.onmessage = function (event) {
	let aisMessage = JSON.parse(event.data)
	console.log('3333333333333', aisMessage)
	//socket.terminate()
};

wss4.onmessage = function (event) {
	let aisMessage = JSON.parse(event.data)
	console.log('4444444444', aisMessage)
	//socket.terminate()
};

