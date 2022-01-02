// react
import React from "react";
import "./App.css";

import Github from "./assets/github.svg";
import Email from "./assets/email2.svg";
import Linkedin from "./assets/linkedin2.svg";

import {
	Articles,
	BackgroundMap,
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
			<Articles />
		</div>

		<div
			id="projects"
			className="center blue-div br3 pa4 flex w-80 w-70-m flex-row center v-mid h6 justify-around mb4">
			<Projects />
		</div>
		<div
			id="contact"
			className="center blue-div br3 pa4 flex w-80 w-70-m flex-row center v-mid h6 justify-around mb4">
			<div id="contact_div" className="w-80 center justify-around">
				<a href="mailto:walter.k.jenkins@gmail.com" className="icon flex w-20">
					<img src={Email} />
				</a>
				<a href="git.walterkjenkins.com" className="icon flex w-20">
					<img src={Github} />
				</a>
				<a href="linkedin.walterkjenkins.com" className="icon flex w-20">
					<img src={Linkedin} />
				</a>
			</div>
		</div>
	</div>
);

export default App;
