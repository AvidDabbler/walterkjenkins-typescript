export const Header = () => {
	return (
		// <div id="head" className="op80 w-100 zi100 pa0 inline w-100 pv2 v-mid">
		<div id="head" className="w-full flex justify-between">
			<nav className="pv3 ph2 tc fr ph3">
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
