import CrudApi from './components/CrudApi';
import { CrudProvider } from './contexts/CrudContext';
import MyPage from './MyPage';
import MyPageContext from './MyPageContext';

function App() {
	return (
		<div>
			<h1>React Context API</h1>
			<a
				href="https://es.reactjs.org/docs/context.html"
				target="_blank"
				rel="noreferrer"
			>
				Documentación
			</a>
			<hr />
			<CrudProvider>
				<CrudApi />
			</CrudProvider>
			<hr />
			<MyPageContext />
			<hr />
			<MyPage />
		</div>
	);
}

export default App;
