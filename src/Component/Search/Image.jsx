import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Card, CardActions, Typography, CardMedia, CardContent, IconButton, Grid } from '@material-ui/core';

const Image = (props) => {
	const URL = {
		first: 'https://loremflickr.com/320/240/?' + props.searchText,
		second: 'https://source.unsplash.com/1600x900/?' + props.searchText,
	};
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={6} sm={6}>
					<Card className={props.css.root}>
						<CardMedia className={props.css.media} image={URL.first} title='Paella dish' />
						<CardContent>
							<Typography variant='h6' color='textSecondary' component='p'>
								This image popup from https://loremflickr.com/ with search term: {0}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label='add to favorites'>
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label='share'>
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} lg={6} sm={6}>
					<Card className={props.css.root}>
						<CardMedia className={props.css.media} image={URL.second} title='Paella dish' />
						<CardContent>
							<Typography variant='h6' color='textSecondary' component='p'>
								This image popup from https://source.unsplace.com/ with search term: {0}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label='add to favorites'>
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label='share'>
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
export default Image;
