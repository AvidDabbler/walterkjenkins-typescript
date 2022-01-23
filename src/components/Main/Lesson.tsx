import React from 'react'
import { snakeCase } from "lodash";
import { LessonType } from '../../types';

export function Lesson({ article }: { article: LessonType }) {
	const { author, link, name, tags, path } = article;
	return (
		<div className="p-2 pt-4 mr-6 lessons border-b-2">
			<h3 className="text-xl">
				<a className="link" href={link}>
					{name}
				</a>
			</h3>
			<h2 className="">{author}</h2>
			<div className="">
			<div className="flex  flex-wrap">
					<h2 className="text-xl flex flex-wrap">
						{path.map((p) => (
							<p className={`${snakeCase(p)} px-2 mx-1 mt-2 rounded-2xl`}>
								{p}
							</p>
						))}
					</h2>
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
