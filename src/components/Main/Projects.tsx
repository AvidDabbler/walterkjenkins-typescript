import React, { useState } from "react";


export const Projects = () => {
	const initialState = {
		projectData: [
			{
				name: "BusStopAssessmentApp",
				publicName: "Bus Stop Assessment App",
				language: "../../assets/javascript.svg",
				tags: ["GIS", "ESRI", "Mobile", "Data Collection"],
				desc: "A mobile friendly web application used to collect information and disseminate install instructions to contractors. This project was used to assess 4,500 bus stops and track the installation process. The other version of this application was the install application. Paired together the two applications allowed for coordination between Metro St Louis staff and hired contractors.",
				front: true,
			},
			{
				name: "MetroSTL-Esri-ETL",
				publicName: "Metro St Louis Esri ETL",
				language: "../../assets/python.svg",
				tags: ["GIS", "ESRI", "ETL", "ArcGIS Enterprise"],
				sections: ["data", "workflows", "management", "infrustructure"],
				desc: "A script designed for Metro St. Louis to move geostatistical operations data from one databased to both ArcGIS online and ArcGIS Enterprise. This script was set up to run on an ongoing basis to keep both datastores up to date with while maintaining data regularity. It was designed to pull out the most up to date stop and routing information from the Trapeze, a bus operations application, and enrich the data with socioeconomic data from the US Census that looks at under represented populations in relation to the Metro St. Louis transit system. ",
				front: true,
			},
			{
				name: "GTFSRT-Parsing",
				publicName: "Realtime Bus Processing",
				language: "../../assets/python.svg",
				tags: ["GPS", "Realtime", "MapBox", "Leaflet"],
				sections: ["applications", "data", "workflows", "collect"],
				desc: "This Python script was designed to be used to work with GTFS-RT for Metro St Louis, a realtime transit specification, that looks at vehicle positions and trip updates. This data, while limited on its own, was paired with a GTFS, a sister specification working with transit schedule data, to enrich the vehicle positions and trip update information by being able to add context to the limited data that is transferred over realtime. This script was meant to run in a loop to create a GeoJson service that a transit agency could serve up as a Hosted Feature Service for online GIS platforms and contains a sample map that shows how it could be displayed by leaflet",
				front: true,
			},
		],
	};
	const [state, setState] = useState(initialState); // eslint-disable-line

	const tags = (tags: Array<string>) => {
		return tags.map((tag) => (
			<div className="project-tags white mh1 dib fl helvetica">
				<p className="dib f7 br-pill ph2 pv1 mb1 dib white bg-orange">{tag}</p>
			</div>
		));
	};

	const projectsList = () => {
		let data = state.projectData;
		let filtered = data.filter((el) => el.front === true);
		return filtered.map((el) => (
			<div id={el.name} className="w-100 flex flex-row blue-div br3 mb3 pa3">
				<div className=" white helvetica tl w-100 w-75-m w-75-l flex flex-column mr1">
					<h3 className="mt0 mb1">{el.publicName}</h3>
					<p className="mt0">{el.desc}</p>
				</div>
				<div className="project-side center w-20 flex ml2">
					<img src={el.language} alt='language'></img>
					<div className="project-tags flex">{tags(el.tags)}</div>
				</div>
				<a href={"https://github.com/AvidDabbler/" + el.name}>
					<p className="white no-underline underline-hover">
						Continue to repo...
					</p>
				</a>
			</div>
		));
	};

	return (
		<div className="tc section-title w-100">
			<h2 className="center tc section-title mt0">Projects</h2>
			<div id="projects-list" className="">
				{projectsList()}
			</div>
		</div>
	);
};

export default Projects;
