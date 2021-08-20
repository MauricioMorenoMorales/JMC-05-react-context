import React, { useContext } from 'react';

import ThemeContext from '../contexts/ThemeContext';

const Footer = ({ texts }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<footer className={theme}>
			<h4>{texts.footerTitle}</h4>
		</footer>
	);
};

export default Footer;
