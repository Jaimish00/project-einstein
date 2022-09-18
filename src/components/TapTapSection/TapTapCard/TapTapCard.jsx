import { useState } from "react";
import "./TapTapCard.scss";

const TapTapCard = ({ cardItem }) => {
	const [isRevealed, setIsRevealed] = useState(false);

	const { img, content } = cardItem;

	const wrapperClasses = "tap-tap-card " + (isRevealed ? "revealed" : "");

	return (
		<div
			className={wrapperClasses}
			onClick={() => setIsRevealed((val) => !val)}>
			<img src={img} alt="content" className="tap-tap-card__img" />
			<div className="tap-tap-card__content">{content}</div>
		</div>
	);
};

export default TapTapCard;
