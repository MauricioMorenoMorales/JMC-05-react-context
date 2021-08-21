import React, { useState } from 'react';
import FooterContext from './components/FooterContext';
import HeaderContext from './components/HeaderContext';
import MainContext from './components/MainContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const initialAuth = null;

const MyPageContext = () => {
	const [auth, setAuth] = useState(initialAuth);

	const handleAuth = event => (auth ? setAuth(null) : setAuth(true));

	return (
		<div className="my-page">
			<ThemeProvider>
				<LanguageProvider>
					<HeaderContext auth={auth} handleAuth={handleAuth} />
					<MainContext auth={auth} />
					<FooterContext />
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
};

export default MyPageContext;
