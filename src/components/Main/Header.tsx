export const Header = () => {
	return (
		<div id="head" className="nav-header w-full z-10 absolute py-3">
			<nav className="w-1/5 ml-auto min-w-min px-4 py-2 flex justify-between">
				<a className="link px-2" data-value="blog" href="/blog">
					Blog
				</a>
				<a className="link px-2" data-value="contact" href="#contact">
					Contact
				</a>
				<a className="link px-2" data-value="contact" href="http://www.geostack.xyz" rel="noreferrer" target='_blank'>
					GeoStack
				</a>
			</nav>
		</div>
	);
};
