import React, { useEffect, useContext } from "react";
import { appContext } from "../../context";
import { Article } from ".";
import { LessonType } from "../../types";
import { Header } from ".";

export function Articles() {
	const { articles, setArticles } = useContext(appContext);
	const getArticles = async () => {
		let request = await fetch(
			"https://notion-api.splitbee.io/v1/table/beba8785230d43b3ab8916d63ae0e360",
		).then((res) => res.json());
		request = request.filter((item: any) => item.published);
		setArticles(request);
	};

	useEffect(() => {
		getArticles();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<Header />
			<div className="flex flex-col w-full h-full min-h-screen bg-blue topo items-center pt-14 text-white mp-14">
				<div className="my-14">
					<h1 className="text-3xl">Blog</h1>
					{articles.length > 0
						? articles.map((el: LessonType, i: number) => (
								<Article key={i} article={el} />
						  ))
						: "loading..."}
				</div>
			</div>
		</div>
	);
}
