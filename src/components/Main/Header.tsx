import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div id="head" className="nav-header w-full z-10 absolute py-3">
			<nav className=" mr-auto min-w-min px-4 py-2">
				<div className="ml-auto w-1/6 pl-16">
					<Link className="link px-2" data-value="blog" to="/blog">
						Blog
					</Link>
					<a className="link px-2" data-value="contact" href="#contact">
						Contact
					</a>
				</div>
			</nav>
		</div>
	);
};
