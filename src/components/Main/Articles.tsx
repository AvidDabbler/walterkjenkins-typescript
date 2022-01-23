import React, { useEffect, useContext } from "react";
import { appContext } from "../../context";
import { Article } from ".";
import { Link } from "react-router-dom";
import { Lesson } from "../../types";

export function Articles() {
	const { articles, setArticles } = useContext(appContext);
	const getArticles = async () => {
		const request = await fetch(
			"https://notion-api.splitbee.io/v1/table/093530426e944244b78b868a3738ab42",
		).then((res) => res.json());
		setArticles(request);
		console.log(request);
	};

	useEffect(() => {
		getArticles();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<div className="flex flex-col w-full h-full bg-blue topo items-center pt-14 text-white mp-14">
				<div className="my-14">
					<h1 className="text-3xl">Blog</h1>
					<div className="w-full bg-orange h-14">
						<Link to="/free-lessons">Free Lessons</Link>
					</div>
					{articles.length > 0
						? articles.map((el: Lesson) => <Article article={el} />)
						: "loading..."}
				</div>
			</div>
		</div>
	);
}
