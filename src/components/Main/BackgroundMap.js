import React, { useEffect, useState } from "react";
import { FeedMessage } from "../../controllers/gtfs-realtime.browser.proto.js";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Pbf from "pbf";


// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

var pburl =
	"https://afternoon-lowlands-09860.herokuapp.com/" + "https://www.metrostlouis.org/RealTimeData/StlRealTimeVehicles.pb?cacheBust=" +
	new Date().valueOf();

// converts data to geojson
// mapbox example: https://docs.mapbox.com/help/data/stations.geojson
const geoData = (d) => {
	const features = d.map((el) => {
		return {
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [
					el.vehicle.position.longitude,
					el.vehicle.position.latitude,
				],
			},
			properties: {
				id: el.vehicle.vehicle.id,
			},
		};
	});

	return {
		type: "FeatureCollection",
		features,
	};
};

export const BackgroundMap = () => {
	const initialState = {
		loaded: false,
		lng: -90.280318,
		lat: 38.6447868,
		zoom: 10.9,
		map: [],
		width: window.innerWidth,
		height: window.innerHeight,
	};

	const [state, setState] = useState(initialState);
	// start of helper functions
	const getData = async () => {
		const url =
			pburl +
			new Date().valueOf();
		let response = await fetch(url);
		if (response.ok) {
			// if HTTP-status is 200-299
			// get the response body (the method explained below)
			const bufferRes = await response.arrayBuffer();
			const pbf = new Pbf(new Uint8Array(bufferRes));
			const obj = FeedMessage.read(pbf);
			return geoData(obj.entity);
		} else {
			console.error("error: ", response.status);
		}
	};

	const addSource = (map, geoJson) => {
		const size = 50;
		let context;
		const pulsingDot = {
			width: size,
			height: size,
			data: new Uint8Array(size * size * 4),

			// When the layer is added to the map,
			// get the rendering context for the map canvas.
			onAdd: function () {
				const canvas = document.createElement("canvas");
				canvas.width = this.width;
				canvas.height = this.height;
				context = canvas.getContext("2d");
			},

			// Call once before every frame where the icon will be used.
			render: function () {
				const duration = 1500;
				const t = (performance.now() % duration) / duration;

				const radius = (size / 2) * 0.2;
				const outerRadius = (size / 1.5) * 0.4 * t + radius;

				// Draw the outer circle.
				context.clearRect(0, 0, this.width, this.height);
				context.beginPath();
				context.arc(
					this.width / 2,
					this.height / 2,
					outerRadius,
					0,
					Math.PI * 2,
				);
				context.fillStyle = `rgba(255, 200, 200, 0.2)`;
				context.fill();

				// Draw the inner circle.
				context.beginPath();
				context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
				context.fillStyle = "rgba(255, 100, 100, 0.5)";
				context.strokeStyle = "rgba(255, 100, 100, 0.5)";
				context.lineWidth = 1 - t;
				context.fill();
				context.stroke();

				// Update this image's data with data from the canvas.
				this.data = context.getImageData(0, 0, this.width, this.height).data;

				// Continuously repaint the map, resulting
				// in the smooth animation of the dot.
				map.triggerRepaint();

				// Return `true` to let the map know that the image was updated.
				return true;
			},
		};

		map.isStyleLoaded(() => {
			map.addSource(`vehicles`, {
				type: "geojson",
				data: geoJson,
			});
			map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

			map.addLayer({
				id: "vehicles",
				type: "symbol",
				layout: {
					"icon-image": "pulsing-dot",
				},
				source: "vehicles",
			});
		});
	};

	// ! this function should be run on an interval

	const updateData = (map) => {
		if (!map) return;

		getData().then((data) => {
			map.getSource("vehicles").setData(data);
		});
	};

	const getAndLoad = async (map) => {
		getData()
			.then((geojson) => {
				addSource(map, geojson);
			})
			.then((data) => {
				setInterval(() => updateData(map), 5000);
			});
	};
	// end of builder functions

	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsdGVyaiIsImEiOiJja2FobWU4dTMwMnR4MnNudWlicmtpc2xkIn0.nAPmnPgkjTXOT808EenEsA';

		const map = new mapboxgl.Map({
			container: "mapRef",
			style: "mapbox://styles/walterj/ckb1lvnmk06y11ilx1sf3uctj",
			center: [state.lng, state.lat],
			zoom: state.zoom,
			interactive: false,
		});
		// setMap(map);
		getAndLoad(map);
	}, []); // eslint-disable-line

	return (
		<div
			style={{ width: state.width, height: state.height }}
			id="mapRef"
			className="mapContainer h80 w-100"></div>
	);
};
