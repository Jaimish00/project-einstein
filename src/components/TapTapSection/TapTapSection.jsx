import "./TapTapSection.scss";
import data from "@/assets/tapTap.json";
import TapTapCard from "./TapTapCard/TapTapCard";
import Footer from "../Footer/Footer";

const TapTapSection = () => {
	return (
		<section className="section tap-tap-section">
			<h2>Let's play tap tap</h2>

			<section className="tap-tap-cards">
				{data.map((item) => {
					return <TapTapCard key={item} cardItem={item} />;
				})}
			</section>

			<Footer />
		</section>
	);
};

export default TapTapSection;
