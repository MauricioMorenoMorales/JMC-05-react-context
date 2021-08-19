import React from 'react';

const Header = ({ theme, handleTheme }) => {
	return (
		<header className={theme}>
			<h2>Mi apliccion sin context API</h2>
			<h3>Mi cabecera</h3>
			<select name="language">
				<option value="es">ES</option>
				<option value="en">EN</option>
			</select>
			<input
				type="radio"
				name="theme"
				id="light"
				onClick={handleTheme}
				value="light"
			/>
			<label htmlFor="light">Claro</label>
			<input
				type="radio"
				name="theme"
				id="dark"
				onClick={handleTheme}
				value="dark"
			/>
			<label htmlFor="dark">Obscuro</label>
			<button>Iniciar Sesión</button>
		</header>
	);
};

export default Header;
