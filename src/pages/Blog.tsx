import React, { useState } from "react";
import { AppProvider } from "../context";
import { Header, Articles } from "../components/Main";

export function Blog() {
	const [articles, setArticles] = useState<any>([]);

	return (
		<AppProvider value={{ articles, setArticles }}>
			<div>
				<Header />
				<Articles />
			</div>
		</AppProvider>
	);
}
