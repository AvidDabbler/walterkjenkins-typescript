import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { getAndLoadVehicles } from "../../utils/map";
import { mbAccessToken } from "../../config";

mapboxgl.accessToken = mbAccessToken;

export const BackgroundMap = () => {
	const mapRef = useRef();
	const initialMap = {
		loaded: false,
		lng: -90.280318,
		lat: 38.6447868,
		zoom: 10.9,
		map: [],
		width: '100%',
		height: '100%',
	};

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: "mapbox://styles/walterj/ckb1lvnmk06y11ilx1sf3uctj",
			center: [initialMap.lng, initialMap.lat],
			zoom: initialMap.zoom,
			interactive: false,
		});
		const vehicles = getAndLoadVehicles(map);
		return () => clearInterval(vehicles);
	}, [mapRef.current]); // eslint-disable-line

	return (
		<div
			style={{ width: initialMap.width, height: initialMap.height }}
			ref={mapRef}
			className="mapContainer h80 w-100"></div>
	);
};
