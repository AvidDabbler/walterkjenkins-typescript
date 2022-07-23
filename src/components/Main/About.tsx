import React from "react";
import { Link } from "react-router-dom";

export function About() {
	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<div className="flex flex-col w-full h-screen text-center bg-blue topo items-center pt-14">
				<div className=" rounded-lg flex justify-center w my-20 text-center flex-col">
					<h2 className="text-white text-xl text-center">My Things</h2>
					<div className="flex flex-col text-white text-center m-6">
						<Link className="link m-6" to={'/blog'}>Blog</Link>
						<a className="link m-6" href="http://git.walterkjenkins.com">GitHub</a>
						<a className="link m-6" href="https://www.linkedin.com/in/walter-k-jenkins/">LinkedIn</a>
					</div>
				</div>
			</div>
		</div>
	);
}
