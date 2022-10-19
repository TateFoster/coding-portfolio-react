import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import ParticleEffects from "./components/Particles";

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
			</div>
			<ParticleEffects />
		</Router>
	);
}

export default App;
