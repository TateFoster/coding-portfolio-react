import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<Router>
			<div className="">
				<NavBar />
				<Routes>
					{/* <Route path="/" element={<AboutMe />} /> */}
					{/* <Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/resume" element={<Resume />} /> */}
				</Routes>
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
