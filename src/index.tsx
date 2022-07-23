import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./components/Main";
import { paths } from "./config";

import "./index.css";
import { Contact } from "./pages/Contact";

ReactDOM.render(
	<HashRouter>
		<Routes>
			<Route path={paths.home} element={<App />} />
			<Route path={paths.blog} element={<Blog />} />
			<Route path={paths.blogArticle} element={<BlogPost />} />
			<Route path={paths.contact} element={<Contact />} />
		</Routes>
	</HashRouter>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
