import React, { useState } from 'react';
import FooterContext from './components/FooterContext';
import HeaderContext from './components/HeaderContext';
import MainContext from './components/MainContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const MyPageContext = () => {
	return (
		<div className="my-page">
			<ThemeProvider>
				<LanguageProvider>
					<AuthProvider>
						<HeaderContext />
						<MainContext />
						<FooterContext />
					</AuthProvider>
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
};

export default MyPageContext;
