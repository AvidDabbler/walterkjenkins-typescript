import React, { useEffect, useState, useRef } from "react";
import { FeedMessage } from "../../controllers/gtfs-realtime.browser.proto.js";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { GeoJSONSource, Map } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Pbf from "pbf";
import { GeoJSON } from "geojson";

var pburl =
	"https://www.metrostlouis.org/RealTimeData/StlRealTimeVehicles.pb?cacheBust=" +
	new Date().valueOf();

// converts data to geojson
// mapbox example: https://docs.mapbox.com/help/data/stations.geojson
const geoData = (d: any) => {
	const features = d.map((el: any) => {
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
	const [map, setMap] = useState<Map | undefined>(undefined);

	// initialize the map
	useEffect(() => {
		mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
			? process.env.REACT_APP_MAPBOX_TOKEN
			: "";

		const map = new mapboxgl.Map({
			container: "mapRef",
			style: "mapbox://styles/walterj/ckb1lvnmk06y11ilx1sf3uctj",
			center: [state.lng, state.lat],
			zoom: state.zoom,
			interactive: false,
		});
		setMap(map);
	}, []); // eslint-disable-line
	
	useEffect(() => {
		if(!map) return 
		getAndLoad();
		
	}, [map])

	// start of helper functions
	const getData = async () => {
		const url =
			"https://mysterious-cove-5444667116.herokuapp.com/" +
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

	const addSource = (geoJson: any) => {
		if(!map) return
		map.addSource(`vehicles`, {
			type: "geojson",
			data: geoJson,
		});
	};

	const addLayer = () => {
		if(!map) return

		map.addLayer({
			id: "vehicles",
			type: "circle",
			source: "vehicles",
			paint: {
				"circle-color": "#f06543",
				"circle-radius": 2.8,
			},
		});
	};

	// start of builder functions
	const loadData = (geoJson: GeoJSON) => {
		// if it is the first time the page is loaded
		addSource(geoJson);
		addLayer();
	};

	// ! this function should be run on an interval

	const updateData = () => {
		if(!map) return

		getData().then((data: any) => {
			(map.getSource("vehicles") as GeoJSONSource).setData(data);
		});
	};

	const getAndLoad = async () => {
		getData().then((geojson: any)=>{
			loadData(geojson);
		}).then(data=> {
			setInterval(() => updateData(), 5000);
		})
	};
	// end of builder functions

	return (
		<div
			style={{ width: state.width, height: state.height }}
			id="mapRef"
			className="mapContainer h80 w-100"></div>
	);
};
