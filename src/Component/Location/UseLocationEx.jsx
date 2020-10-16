import React from 'react';
import { useLocation } from 'react-router-dom';

const UseLocationEx = () => {
	const location = useLocation();
	return (
		<React.Fragment>
			<h1>Use Location</h1>
			<p>Pathname: {location.pathname}</p>
			<p>Search: {location.search}</p>
			<p>Hash: {location.hash}</p>
			<p>State: {location.state}</p>
			<p>Key: {location.key}</p>
		</React.Fragment>
	);
};

export default UseLocationEx;
