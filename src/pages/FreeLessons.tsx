import React, { useState } from "react";
import { AppProvider } from "../context";
import { SignupButton, Header, Lessons } from "../components/Main";

export default function Blog() {
	const [articles, setArticles] = useState<any>([]);

	return (
		<AppProvider value={{ articles, setArticles }}>
			<div>
				<Header />
				<Lessons />
				<SignupButton />
			</div>
		</AppProvider>
	);
}
