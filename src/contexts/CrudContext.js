import { createContext, useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
	const [db, setDb] = useState(null),
		[dataToEdit, setDataToEdit] = useState(null), // Is used in the <form /> and is activated on the component <crudTable />
		[error, setError] = useState(null),
		[loading, setLoading] = useState(true);

	const api = helpHttp();
	let url = 'http://localhost:3333/santos';

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then(res => {
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb(null);
					setError(res);
				}
			});
		setLoading(false);
	}, [url]);

	//Here you have the crud functions create update delete, but not get that is default
	//Create data inside the component <CrudForm />
	const createData = data => {
		data.id = Date.now();
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};

		api.post(url, options).then(fetchResponse => {
			console.log(fetchResponse);
			if (!fetchResponse.err) {
				setDb([...db, fetchResponse]);
			} else {
				setError(fetchResponse);
			}
		});

		setDb([...db, data]);
	}; //!||
	const updateData = data => {
		const endPoint = `${url}/${data.id}`;
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.put(endPoint, options).then(postResponse => {
			if (!postResponse.err) {
				let newData = db.map(element =>
					element.id === data.id ? data : element,
				);
				setDb(newData);
			} else {
				setError(postResponse);
			}
		});
	}; //!||
	const deleteData = id => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id? ${id}`,
		);
		if (isDelete) {
			const endPoint = `${url}/${id}`;
			const options = {
				headers: { 'content-type': 'application/json' },
			};
			api.del(endPoint, options).then(deleteResponse => {
				if (!deleteResponse.err) {
					const newData = db.filter(element => element.id !== id);
					setDb(newData);
				} else {
					setError(deleteResponse);
				}
			});
			const newData = db.filter(element => element.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};
	const data = {
		createData,
		updateData,
		dataToEdit,
		setDataToEdit,
		loading,
		error,
		db,
		deleteData,
	};
	return <CrudContext.provider value={data}>{children}</CrudContext.provider>;
};

export { CrudProvider };
export default CrudContext;
