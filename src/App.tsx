import React from "react";
import {
	SignupButton,
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
				{/* <Header className="h60 w-100" /> */}
				<Header />
			</div>

			<div id="map" className="mapContainer w-100 fixed">
				{/* <BackgroundMap className="mapContainer w-100" /> */}
				<BackgroundMap />
			</div>

			<Signature />
		</div>

		<About />
		<SignupButton />
	</div>
);

export default App;
