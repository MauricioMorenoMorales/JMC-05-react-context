import CrudApi from './components/CrudApi';
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
			<CrudApi />
			<hr />
			<MyPageContext />
			<hr />
			<MyPage />
		</div>
	);
}

export default App;
