import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const initialTheme = 'light';

const MyPage = () => {
	const [theme, setTheme] = useState(initialTheme);

	const handleTheme = event => setTheme(event.target.value);

	return (
		<div className="my-page">
			<Header theme={theme} handleTheme={handleTheme} />
			<Main theme={theme} />
			<Footer theme={theme} />
		</div>
	);
};

export default MyPage;
