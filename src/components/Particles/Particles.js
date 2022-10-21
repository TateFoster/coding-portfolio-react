import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Particles.css";

export default function ParticleEffects() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				backgroundMode: true,
				fpsLimit: 120,
				particles: {
					color: {
						value: "#ff0000",
						animation: {
							enable: true,
							speed: 50,
							sync: false,
						},
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: "top",
						enable: true,
						outModes: {
							default: "out",
						},
						random: true,
						speed: 0.25,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					life: {
						duration: {
							sync: false,
							value: 200,
						},
						count: 0,
						delay: {
							random: {
								enable: true,
								minimumValue: 0.5,
							},
							value: 1,
						},
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 0.5, max: 2 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
