import React, { useState } from 'react';
import './ColorButton.css';

const CenteredButton = () => {
	const [isAlternateColor, setAlternateColor] = useState(false);

	const handleClick = () => {
		setAlternateColor(prevState => !prevState);
	};

	return (
		<div className="centered-container">
			<button
				className={isAlternateColor ? 'alternateColor' : 'defaultColor'}
				onClick={handleClick}
			>
				{isAlternateColor ? 'Красная кнопка' : 'Синяя кнопка'}
			</button>
		</div>
	);
};

export default CenteredButton;
