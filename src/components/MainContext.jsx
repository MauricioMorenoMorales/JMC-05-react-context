import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import AuthContext from '../contexts/AuthContext';

const MainContext = () => {
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);
	const { auth } = useContext(AuthContext);
	return (
		<main className={theme}>
			{auth ? <p>{texts.mainWelcome}</p> : <p>{texts.mainHello}</p>}
			<p>{texts.mainContent}</p>
		</main>
	);
};

export default MainContext;
