import React, { useContext } from 'react';

import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import AuthContext from '../contexts/AuthContext';

const Header = () => {
	const { theme, handleTheme } = useContext(ThemeContext);
	const { texts, handleLanguage } = useContext(LanguageContext);
	const { auth, handleAuth } = useContext(AuthContext);
	return (
		<header className={theme}>
			<h2>{texts.headerTitle}</h2>
			<h3>{texts.headerSubtitle}</h3>
			<select name="language" onChange={handleLanguage}>
				<option value="es">ES</option>
				<option value="en">EN</option>
			</select>
			<input
				type="radio"
				name="theme"
				id="light-context"
				onClick={handleTheme}
				value="light"
			/>
			<label htmlFor="light-context">{texts.headerLight}</label>
			<input
				type="radio"
				name="theme"
				id="dark-context"
				onClick={handleTheme}
				value="dark"
			/>
			<label htmlFor="dark-context">{texts.headerDark}</label>
			<button onClick={handleAuth}>
				{auth ? texts.buttonLogin : texts.buttonLogout}
			</button>
		</header>
	);
};

export default Header;
