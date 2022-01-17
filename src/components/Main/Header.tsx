export const Header = () => {
	return (
		// <div id="head" className="op80 w-100 zi100 pa0 inline w-100 pv2 v-mid">
		<div id="head" className="nav-header w-full z-10 absolute py-3">
			{/* <nav className="pv3 ph2 tc fr ph3"> */}
			<nav className="w-1/4 ml-auto px-4 py-2 flex justify-between">
				<a className="link mh3 f6" data-value="services" href="#services">
					Services
				</a>
				<a className="link mh3 f6" data-value="blog" href="#blog">
					Blog
				</a>
				<a className="link mh3 f6" data-value="projects" href="#projects">
					Projects
				</a>
				<a className="link mh3 f6" data-value="contact" href="#contact">
					Contact
				</a>
			</nav>
		</div>
	);
};
