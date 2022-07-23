import React from "react";
import { ArticleType } from "../../types";
import { Link } from "react-router-dom";
import { paths } from "../../config";

export function Article({ article }: { article: ArticleType }) {
	const { id, tags, name } = article;
	return (
		<div className="p-2 pt-4 mr-6 lessons border-b-2">
			<h3 className="text-xl">
				<Link className="link" to={`${paths.blog}/${id.replaceAll('-','')}`}>
					{name}
				</Link>
			</h3>
			<div className="">
			<div className="flex  flex-wrap">
				</div>
				<div className="flex flex-wrap my-2">
					{tags.map((tag) => (
						<p className="flex flex-wrap bg-orange text-white px-2 mx-1 rounded-2xl">
							{tag}
						</p>
					))}
				</div>
				
			</div>
		</div>
	);
}
