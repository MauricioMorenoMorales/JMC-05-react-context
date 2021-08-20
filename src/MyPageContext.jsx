import React, { useState } from 'react';
import FooterContext from './components/FooterContext';
import HeaderContext from './components/HeaderContext';
import MainContext from './components/MainContext';
import { ThemeProvider } from './contexts/ThemeContext';

const initialLanguage = 'es';
const initialAuth = null;

const translations = {
	es: {
		headerTitle: 'Mi aplicacion CON Context Api',
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
		headerTitle: 'My application WITH Context Api',
		headerSubtitle: 'My Header',
		headerLight: 'Sure',
		headerDark: 'Dark',
		buttonLogin: 'Login',
		buttonLogout: 'Close Session',
		mainWelcome: 'Welcome Guest',
		mainHello: 'Hello user',
		mainContent: 'My main content',
		footerTitle: 'My footer',
	},
};

const MyPageContext = () => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);
	const [auth, setAuth] = useState(initialAuth);

	const handleLanguage = event => {
		if (event.target.value === 'es') {
			setLanguage('es');
			setTexts(translations.es);
		} else {
			setLanguage('en');
			setTexts(translations.en);
		}
	};

	const handleAuth = event => (auth ? setAuth(null) : setAuth(true));

	return (
		<div className="my-page">
			<ThemeProvider>
				<HeaderContext
					texts={texts}
					handleLanguage={handleLanguage}
					auth={auth}
					handleAuth={handleAuth}
				/>
				<MainContext texts={texts} auth={auth} />
				<FooterContext texts={texts} />
			</ThemeProvider>
		</div>
	);
};

export default MyPageContext;
