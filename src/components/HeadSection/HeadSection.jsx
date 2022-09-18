import "./HeadSection.scss";

import Confetti from "react-confetti";
import { Fade } from "react-awesome-reveal";
import useWindowSize from "react-use/lib/useWindowSize";

const HeadSection = () => {
	const { width, height } = useWindowSize();

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
