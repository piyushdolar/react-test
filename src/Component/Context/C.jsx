import React, { useContext, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ComName } from '../App';
import Button from '@material-ui/core/Button';

const A = () => {
	const [number, setNumber] = useState(0);

	const buttonClicked = () => {
		setNumber(number + 1);
	};

	const ComponentName = useContext(ComName);

	useEffect(() => {
		// alert('uSE EFFECT in affect.');
		console.warn('It is from context page to initialize userEffect() function');
	}, [number]);

	return (
		<Box mt={2}>
			<Card>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						Import from {ComponentName}
					</Typography>
					<Button variant='contained' color='primary' onClick={buttonClicked}>
						Click Me, {number}
					</Button>
				</CardContent>
			</Card>
		</Box>
	);
};

export default A;
