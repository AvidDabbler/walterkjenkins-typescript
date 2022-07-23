import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { paths } from "../../config";

export const Header = () => {
	const popoverRef = useRef<any>();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div id="head" className="nav-header w-full z-10 absolute py-3">
			<nav className="ml-auto min-w-min px-4 py-2">
				<div className="header-hamburger">
					<FaHamburger
						onClick={() => setIsOpen(!isOpen)}
						size={"32px"}></FaHamburger>
				</div>
				<div
					ref={popoverRef}
					className={`hamburger-content-container ${
						!isOpen ? "right" : "left"
					}`}>
					<div className={`flex flex-col popover`}>
						<Link className="link px-2" data-value="home" to={paths.home}>
							Home
						</Link>
						<Link className="link px-2" data-value="blog" to={paths.blog}>
							Blog
						</Link>
						<HashLink
							className="link px-2"
							data-value="contact"
							to={paths.contact}>
							Contact
						</HashLink>
					</div>
				</div>
			</nav>
		</div>
	);
};
