import { Fragment } from "react";
import DataLogo from "../../assets/data.svg";
import MapLogo from "../../assets/map.svg";
import ProcessingLogo from "../../assets/tools.svg";

// ! CONVERT TO CLASS
export const Services = () => {
	const ser = [
		{
			name: "Maps",
			icon: MapLogo,
			desc: "Designing stunning mapping applications and visualizations.",
			credit: "GPS by Turkkub from the Noun Project",
			projectList: [],
		},
		{
			name: "Data",
			icon: DataLogo,
			desc: "Architecting sustainable logical data structures for sensible applications.",
			credit: "Data by OliM from the Noun Project",
			projectList: [],
		},
		{
			name: "Processing",
			icon: ProcessingLogo,
			desc: "A track record of turning chaos into calm by standardizing workflows and processes.",
			credit: "tools by Luboš Volkov from the Noun Project",
			projectList: [],
		},
	];

	// if page width is > 1000?
	return (
		<Fragment>
			{ser.map((a) => {
				// issue with icon div height and width
				return (
					<div className="center tc white blue-div br3 flex flex-column  w-100 w-60-m w-30-l pa2 mv3">
						<img
							src={a.icon}
							alt={a.name}
							data-credit={a.credit}
							className="center section-title flex icon pa3 center v-mid inline w-40"></img>
						<h2 className="center tc pa0 ma0 section-title white">{a.name}</h2>
						<p className="center tc mv3 helvetica white">{a.desc}</p>
					</div>
				);
			})}
		</Fragment>
	);
};
