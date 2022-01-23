import React, { useState } from "react";
import { AppProvider } from "../context";
import { SignupButton, Header, Lessons } from "../components/Main";

export default function Blog() {
	const [lessons, setLessons] = useState<any>([]);

	return (
		<AppProvider value={{ lessons, setLessons }}>
			<div>
				<Header />
				<Lessons />
				<SignupButton />
			</div>
		</AppProvider>
	);
}
