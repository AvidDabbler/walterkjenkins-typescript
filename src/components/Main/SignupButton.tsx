import React from "react";
import Bell from "../../assets/bell.svg";
import { links } from "../../config";

export function SignupButton() {
	return (
		<a
			href={links.emailList}
			target="_blank"
			rel="noreferrer"
			className="signup p-8 fixed flex rounded-full bg-orange">
			<img src={Bell} alt="Sign up for notifications"></img>
		</a>
	);
}
