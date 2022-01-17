// react
import React from "react";
import "./App.css";

import Github from "./assets/github.svg";
import Email from "./assets/email2.svg";
import Linkedin from "./assets/linkedin2.svg";

import { BackgroundMap, Header, About, Signature } from "./components/Main";

const App = () => (
	<div>
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

			<About />
		</div>
		{/* <div id="contact" className="blue-div mx-auto w-full">
			<div
				id="contact_div"
				className="w-1/4 flex flex-row ml-auto justify-around">
				<a href="https://twitter.walterkjenkins.com" className="w-12">
					<img src={Email} className="w-12" />
				</a>
				<a href="git.walterkjenkins.com" className="w-12">
					<img src={Github} className="w-12" />
				</a>
				<a href="linkedin.walterkjenkins.com" className="w-12">
					<img src={Linkedin} className="w-12" />
				</a>
			</div>
		</div> */}
	</div>
);

export default App;
