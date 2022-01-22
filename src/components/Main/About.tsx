import React from "react";
import { Link } from "react-router-dom";

export function About() {
	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<div className="flex flex-col w-full h-screen bg-blue topo items-center pt-14">
				<div className=" rounded-lg flex justify-center w my-20">
					<h2 className="text-white text-xl text-center">My Things</h2>
				</div>
				<div className="h-full items-center">
					<div className="justify-around text-white text-center flex flex-col md:flex-row">
						<Link className="mt-2 link" to={'/blog'}>Blog</Link>
						<a className="mt-14 link" href="http://www.geostack.xyz">GeoStack</a>
					</div>
					<div className="justify-around text-white text-center flex flex-col md:flex-row">
						<a className="mt-14 link" href="http://git.walterkjenkins.com">GitHub</a>
						<a className="mt-14 link" href="http://linkedin.walterkjenkins.com">LinkedIn</a>
					</div>
				</div>
			</div>
		</div>
	);
}
