import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Blog, FreeLessons } from "./pages";
import { BlogPost } from "./components/Main";

import "./index.css";

ReactDOM.render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:id" element={<BlogPost />} />
			<Route path="/free-lessons" element={<FreeLessons />} />
		</Routes>
	</HashRouter>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
