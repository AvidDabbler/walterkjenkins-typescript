import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config";

export function Footer() {
	return (
		<div className="w-full bg-blue h-10 footer text-orange flex p-6 pb-10 flex-row justify-around">
			<Link className="flex link" to={paths.home}>
				Home
			</Link>
			<Link className="flex link" to={paths.blog}>
				Blog
			</Link>
			<Link className="flex link" to={paths.contact}>
				Contact
			</Link>
		</div>
	);
}
