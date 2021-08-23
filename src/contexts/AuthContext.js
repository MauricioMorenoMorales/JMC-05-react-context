import { createContext, useState } from 'react';

const initialAuth = null;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuth);
	const handleAuth = event => (auth ? setAuth(null) : setAuth(true));

	const data = { auth, handleAuth };
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
