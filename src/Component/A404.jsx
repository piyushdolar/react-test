import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const A404 = () => {
	return (
		<React.Fragment>
			<Box mt={1}>
				<Card variant='outlined'>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							404 Error
						</Typography>
						<Typography color='textSecondary'>Page not found</Typography>
						<NavLink to='/'>Go Back</NavLink>
					</CardContent>
				</Card>
			</Box>
		</React.Fragment>
	);
};
export default A404;
