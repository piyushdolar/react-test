import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
	let { first, second } = useParams();
	return (
		<h1>
			Hi There, It's {first} and {second}.
		</h1>
	);
};

export default Params;
