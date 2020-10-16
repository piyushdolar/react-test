import React, { useState } from 'react';
import { TextField, Box, Grid, makeStyles } from '@material-ui/core';
import ImageComponent from './Image';

const useStyles = makeStyles({
	root: {
		maxWidth: 'auto',
	},
	media: {
		height: 500,
	},
});

const SearchBox = () => {
	const classes = useStyles();
	const [searchText, setSearchText] = useState('dog');
	const Searching = (event) => {
		setSearchText(event.target.value);
	};

	return (
		<React.Fragment>
			<Box component='span' m={1}>
				<Grid container spacing={3}>
					<Grid item xs={12} lg={12} sm={12}>
						<form noValidate autoComplete='off'>
							<TextField label='Enter Image Name To Search' variant='outlined' fullWidth value={searchText} onChange={Searching} />
						</form>
					</Grid>
				</Grid>
			</Box>
			<Box component='span' m={1}>
				<ImageComponent css={classes} searchText={searchText} />
			</Box>
		</React.Fragment>
	);
};

export default SearchBox;
