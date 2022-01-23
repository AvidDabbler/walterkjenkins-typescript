import React, { useState } from "react";
import { AppProvider } from "../context";
import { SignupButton, Header, Articles } from "../components/Main";

export default function Blog() {
	const [articles, setArticles] = useState<any>([]);

	return (
		<AppProvider value={{ articles, setArticles }}>
			<div>
				<Header />
				<Articles />
				<SignupButton />
			</div>
		</AppProvider>
	);
}
