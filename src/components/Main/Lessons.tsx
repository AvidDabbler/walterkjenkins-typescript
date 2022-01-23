import React, { useEffect, useContext, useState } from "react";
import { appContext } from "../../context";
import { Article } from ".";
import { Lesson } from "../../types";
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

	const { articles, setArticles } = useContext(appContext);

	const reduceList = (key: string, request: Array<any>) => {
		return request.reduce((acc: any, cur) => {
			for (let tag of cur[key]) {
				if (!acc.includes(tag)) {
					acc = [
						...acc,
						{ value: tag, label: tag, color: "#FF5630", isFixed: true },
					];
				}
			}
			return acc;
		}, []);
	};

	const menuOpen = () => {
		console.log("asopdnoaisdf");
	};

	const customStyles = {
		control: (base: any, state: any) => ({
			...base,
			background: "#023950",
			color: "black",
			// match with the menu
			borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
			// Overwrittes the different states of border
			borderColor: state.isFocused ? "yellow" : "green",
			// Removes weird border around container
			boxShadow: state.isFocused ? null : null,
			"&:hover": {
				// Overwrittes the different states of border
				borderColor: state.isFocused ? "red" : "blue",
			},
		}),
		menu: (base: any) => ({
			...base,
			// override border radius to match the box
			borderRadius: 0,
			// kill the gap
			marginTop: 0,
			color: "black",
		}),
		menuList: (base: any) => ({
			...base,
			// kill the white space on first and last option
			padding: 0,
			color: "black",
		}),
	};

	const getArticles = async () => {
		const request = await fetch(
			"https://notion-api.splitbee.io/v1/table/093530426e944244b78b868a3738ab42",
		).then((res) => res.json());
		setArticles(request);

		const tags = reduceList("tags", request);
		const path = reduceList("path", request);
		const technology = reduceList("technology", request);

		setFilters({ tags, path, technology });
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div className="my-auto h-full">
			<div className="bg-orange h-px"></div>
			<div className="px-4 flex flex-col w-full h-full bg-blue topo items-center pt-14 text-white mp-14">
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
							<div className={`text-black w-80 px-2 ${revealFilters ? '' : 'hidden'}`}>
								<span className="text-white">Tags</span>
								<Select
									onMenuOpen={menuOpen}
									// styles={customStyles}
									className="bg-green-400 rounded-lg"
									isMulti
									options={filters.tags}
								/>
							</div>
						)}
						{filters.tags.length > 1 && (
							<div className={`text-black w-80 px-2 ${revealFilters ? '' : 'hidden'}`}>
								<span className="text-white">Tags</span>
								<Select
									onMenuOpen={menuOpen}
									// styles={customStyles}
									className="bg-green-400 rounded-lg"
									isMulti
									options={filters.tags}
								/>
							</div>
						)}
						{filters.tags.length > 1 && (
							<div className={`text-black w-80 px-2 ${revealFilters ? '' : 'hidden'}`}>
								<span className="text-white">Tags</span>
								<Select
									onMenuOpen={menuOpen}
									// styles={customStyles}
									className="bg-green-400 rounded-lg"
									isMulti
									options={filters.tags}
								/>
							</div>
						)}
					</div>
					<div className="">
						{articles.length > 0
							? articles.map((el: Lesson) => <Article article={el} />)
							: "loading..."}
					</div>
				</div>
			</div>
		</div>
	);
}
