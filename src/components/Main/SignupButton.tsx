import React from "react";
import Bell from "../../assets/bell.svg";

export function SignupButton() {
	return (
		<a
			href="http://www.geostack.xyz/"
			target="_blank"
			rel="noreferrer"
			className="signup p-8 fixed flex rounded-full bg-orange">
			<img src={Bell} alt="Sign up for notifications"></img>
		</a>
	);
}
