// react
import React from "react";
import "./App.css";

import {
	BackgroundMap,
	Contact,
	Header,
	Projects,
	Services,
	Signature,
} from "./components/Main";

const App = () => (
	<div id="app" className="w-100">
		<div className=" w-100 zi100">
			{/* <Header className="h60 w-100" /> */}
			<Header />
		</div>

		<div id="map" className="mapContainer w-100">
			{/* <BackgroundMap className="mapContainer w-100" /> */}
			<BackgroundMap />
		</div>

		<Signature />

		<div
			id="services"
			className="center blue-div br3 pa4 flex w-80 w-70-m flex-row center v-mid h6 justify-around mb4">
			<Services />
		</div>

		<div
			id="blog"
			className="center blue-div br3 pa4 flex w-80 w-70-m flex-row center v-mid h6 justify-around mb4">
			{/* <Articles /> */}
		</div>

		<div
			id="projects"
			className="center blue-div br3 pa4 flex w-80 w-70-m flex-row center v-mid h6 justify-around mb4">
			<Projects />
		</div>

		<div
			id="contact"
			className="center blue-div br3 pa4 flex w-80 w-70-m flex-row center v-mid h6 justify-around mb4">
			<Contact />
		</div>
	</div>
);

export default App;
