import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const initialTheme = 'light';
const initialLanguage = 'es';

const translations = {
	es: {
		headerTitle: 'Mi aplicacion SIN Context Api',
		headerSubtitle: 'Mi Cabecera',
		headerLight: 'Claro',
		headerDark: 'Oscuro',
		buttonLogin: 'Iniciar Sesion',
		buttonLogout: 'Cerrar Sesion',
		mainWelcome: 'Bienvenido',
		mainHello: 'Hola usuario',
		mainContent: 'Mi contenido principal',
		footerTitle: 'Mi pie de pagina',
	},
	en: {
		headerTitle: 'My application WITHOUT Context Api',
		headerSubtitle: 'My Header',
		headerLight: 'Sure',
		headerDark: 'Dark',
		buttonLogin: 'Login',
		buttonLogout: 'Close Session',
		mainWelcome: 'Welcome',
		mainHello: 'Hello user',
		mainContent: 'My main content',
		footerTitle: 'My footer',
	},
};

const MyPage = () => {
	const [theme, setTheme] = useState(initialTheme);
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);

	const handleTheme = event => setTheme(event.target.value);

	const handleLanguage = event => {
		if (event.target.value === 'es') {
			setLanguage('es');
			setTexts(translations.es);
		} else {
			setLanguage('en');
			setTexts(translations.en);
		}
	};

	return (
		<div className="my-page">
			<Header
				theme={theme}
				handleTheme={handleTheme}
				texts={texts}
				handleLanguage={handleLanguage}
			/>
			<Main theme={theme} texts={texts} />
			<Footer theme={theme} texts={texts} />
		</div>
	);
};

export default MyPage;
