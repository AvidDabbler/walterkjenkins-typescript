import React, { useEffect, useContext, useState } from "react";
import { notionApiUrl } from "../../config";
import { appContext } from "../../context";
import { LessonType } from "../../types";
import { Lesson } from "./Lesson";

export function Lessons() {
	const [displayedLessons, setDisplayedLessons] = useState([]);

	const { setLessons } = useContext(appContext);

	const getLessons = async () => {
		const request = await fetch(notionApiUrl).then((res) => res.json());
		setLessons(request);

		setDisplayedLessons(request);
	};

	useEffect(() => {
		getLessons();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<div className="px-4 flex flex-col w-full h-full bg-blue topo min-h-screen items-center pt-14 text-white mp-14">
				<div className="my-14">
					<h1 className="text-3xl">Free Lessons</h1>

					<div className="">
						{displayedLessons.length > 0
							? displayedLessons.map((el: LessonType) => (
									<Lesson article={el} />
							  ))
							: "loading..."}
					</div>
				</div>
			</div>
		</div>
	);
}
