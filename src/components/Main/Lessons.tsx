import React, { useEffect, useContext, useState } from "react";
import { appContext } from "../../context";
import { Article } from ".";
import { LessonType } from "../../types";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Filter from "../../assets/filter.svg";

const initFilters = {
	tags: [],
	path: [],
	technology: [],
};

const animatedComponents = makeAnimated();

export function Lessons() {
	const [displayedLessons, setDisplayedLessons] = useState([]);
	const [filters, setFilters] = useState(initFilters);
	const [activeFilters, setActiveFilters] = useState(initFilters);
	const [revealFilters, setRevealFilters] = useState(false);

	const { lessons, setLessons } = useContext(appContext);

	const reduceList = (key: string, request: Array<any>) => {
		let list = request.reduce((acc: any, cur) => {
			for (let tag of cur[key]) {
				// const value = { value: tag, label: tag, isFixed: true }
				if (!acc.includes(tag)) {
					acc = [...acc, tag];
				}
			}
			return acc;
		}, []);
		list.sort((a: string, b: string) => {
			if( a > b) return 1
			else return -1
		});
		return list.map((tag: any) => {
			return { value: tag, label: tag, color: "#FF5630", isFixed: true };
		});
	};

	const getLessons = async () => {
		const request = await fetch(
			"https://notion-api.splitbee.io/v1/table/093530426e944244b78b868a3738ab42",
		).then((res) => res.json());
		setLessons(request);

		const tags = reduceList("tags", request)
		const path = reduceList("path", request)
		const technology = reduceList("technology", request)

		setFilters({ tags, path, technology });
		setDisplayedLessons(request);
	};

	const updateFilters = () => {};

	useEffect(() => {
		getLessons();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		updateFilters();
	}, [activeFilters]);

	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<div className="px-4 flex flex-col w-full h-full bg-blue topo min-h-screen items-center pt-14 text-white mp-14">
				<div className="my-14">
					<h1 className="text-3xl">Free Lessons</h1>
					<div className="flex ml-auto px-4">
						<button
							className="ml-auto"
							onClick={() => setRevealFilters(!revealFilters)}>
							<img src={Filter} alt="filter lessons"></img>
						</button>
					</div>
					<div className="flex flex-wrap ">
						{filters.tags.length > 1 && (
							<div
								className={`text-black w-80 px-2 ${
									revealFilters ? "" : "hidden"
								}`}>
								<span className="text-white">Tags</span>
								<Select
									className="bg-green-400 rounded-lg"
									isMulti
									options={filters.tags}
								/>
							</div>
						)}
						{filters.path.length > 1 && (
							<div
								className={`text-black w-80 px-2 ${
									revealFilters ? "" : "hidden"
								}`}>
								<span className="text-white">Path</span>
								<Select
									className="bg-green-400 rounded-lg"
									options={filters.path}
								/>
							</div>
						)}
						{filters.technology.length > 1 && (
							<div
								className={`text-black w-80 px-2 ${
									revealFilters ? "" : "hidden"
								}`}>
								<span className="text-white">Technology</span>
								<Select
									className="bg-green-400 rounded-lg"
									isMulti
									options={filters.technology}
								/>
							</div>
						)}
					</div>
					<div className="">
						{displayedLessons.length > 0
							? displayedLessons.map((el: LessonType) => (
									<Article article={el} />
							  ))
							: "loading..."}
					</div>
				</div>
			</div>
		</div>
	);
}
