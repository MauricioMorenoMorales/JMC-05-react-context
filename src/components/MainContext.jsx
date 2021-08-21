import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';

const MainContext = ({ auth }) => {
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);
	return (
		<main className={theme}>
			{auth ? <p>{texts.mainWelcome}</p> : <p>{texts.mainHello}</p>}
			<p>{texts.mainContent}</p>
		</main>
	);
};

export default MainContext;
