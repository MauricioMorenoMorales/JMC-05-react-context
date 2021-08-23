import React, { useContext } from 'react';
import CrudContext from '../contexts/CrudContext';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
	const { dataToEdit, loading, error, db } = useContext(CrudContext);
	return (
		<div>
			<br />
			<h2>CRUD API con ContextAPI</h2>
			<article className="grid-1-2">
				<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
				{/* The crud form create and update the data */}
				<CrudForm />
				{loading && <Loader />}
				{error && (
					<Message
						message={`Error ${error.status}: ${error.statusText}`}
						backgroundColor="#dc3545"
					/>
				)}
				{/* CrudApi default function is get the data and store it in the component Crudtable */}
				{/* When they click on a button inside this component they call the two functions bellow  with the element and elemet.id*/}
				{db && <CrudTable />}
			</article>
		</div>
	);
};

export default CrudApi;
