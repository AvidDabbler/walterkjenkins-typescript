import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<div className="w-full bg-blue h-10 footer text-orange flex p-6 pb-10 flex-row justify-around">
			<Link className="flex link" to="/">Home</Link>
			<Link className="flex link" to="/">Blog</Link>
			<a className="flex link" href="http://www.geostack.xyz">GeoStack</a>
		</div>
	);
}
