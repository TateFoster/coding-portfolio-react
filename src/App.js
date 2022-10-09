import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";

function App() {
	return (
		<Router>
			<div className="">
				<NavBar />
				<Routes>
					<Route path="/" element={<AboutMe />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
				<Footer />
				<div class="animation-wrapper">
					<div class="particle particle-1"></div>
					<div class="particle particle-2"></div>
					<div class="particle particle-3"></div>
					<div class="particle particle-4"></div>
				</div>
			</div>
		</Router>
	);
}

export default App;
