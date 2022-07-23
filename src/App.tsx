import React from "react";
import {
	BackgroundMap,
	Header,
	About,
	Signature,
} from "./components/Main";
import "./App.scss";

const App = () => (
	<div>
		<div id="app" className="w-100 h-screen">
			<div className=" w-100 zi100">
				<Header />
			</div>
			<div id="map" className="mapContainer w-100 fixed">
				<BackgroundMap />
			</div>
			<Signature />
		</div>
		<About />
	</div>
);

export default App;
