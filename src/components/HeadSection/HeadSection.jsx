import "./HeadSection.scss";

import Confetti from "react-confetti";
import { Fade } from "react-awesome-reveal";
import useWindowSize from "react-use/lib/useWindowSize";
import useSound from "use-sound";

import happyBirthdayMusic from "../../sounds/happy-birthday-music-box.wav";
import { useEffect } from "react";
import { useState } from "react";

const HeadSection = () => {
	const { width, height } = useWindowSize();
	const [play] = useSound(happyBirthdayMusic);

	useEffect(() => {
		setTimeout(() => {
			play();
		}, 5);
	}, [play]);

	return (
		<section className="section head-section">
			<Fade delay={1500} triggerOnce>
				<span className="happy-birthday-span">
					Happy Birthday, Einstein !!!
				</span>
			</Fade>
			<Confetti width={width} height={height} />
		</section>
	);
};

export default HeadSection;
