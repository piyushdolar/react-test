import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TodoList from './TodoList';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function SimpleCard() {
	const classes = useStyles();
	const [inputItem, setInputItem] = useState('');
	const [items, setItem] = useState([]);
	const [number, setNumber] = useState(0);
	const [open, setOpen] = React.useState(false);

	const onChangeInput = (v) => {
		setInputItem(v.target.value);
	};

	const submitValue = () => {
		setItem((oldValue) => {
			return [...oldValue, inputItem];
		});
		setInputItem('');
	};

	const deleteValue = (itemKey) => {
		setItem((oldValues) => {
			return oldValues.filter((item, key) => {
				return key !== itemKey;
			});
		});
	};

	const incrementNumber = () => {
		setNumber((value) => {
			return value + 1;
		});
	};

	const decrementNumber = () => {
		setNumber((value) => {
			if (value <= 0) {
				setOpen(true);
				return 0;
			} else {
				return value - 1;
			}
		});
	};

	// Snackbar functions
	const handleClose = (event, reason) => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant='h5' component='h2'>
						ToDo
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={10}>
							<TextField name='inputBox' label='Enter ToDo Task' value={inputItem} fullWidth={true} onChange={onChangeInput} />
						</Grid>
						<Grid item xs={12} md={2}>
							<Button type='submit' variant='contained' color='primary' fullWidth={true} onClick={submitValue} startIcon={<SaveIcon />}>
								Submit
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} md={12}>
							<Box color='text.primary' mt={4}>
								<Typography variant='h5'>Added Item List</Typography>
								<Typography variant='caption'>{inputItem}</Typography>
								<Divider variant='fullWidth' />
								{items.map((itemValue, key) => {
									return <TodoList key={key} itemKey={key} item={itemValue} onDelete={deleteValue} />;
								})}
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>

			<Box mt={1}>
				<Card>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Increment/Decrement Program
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Dynamic Value: {number}
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant='contained' color='secondary' onClick={decrementNumber}>
							<RemoveIcon />
						</Button>
						<Button variant='contained' color='primary' onClick={incrementNumber}>
							<AddIcon />
						</Button>
					</CardActions>
				</Card>
			</Box>

			{/* Snackbar only */}
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message='Can not decrease less than 0.'
				action={
					<React.Fragment>
						<Button color='secondary' size='small' onClick={handleClose}>
							UNDO
						</Button>
						<IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
							<CloseIcon fontSize='small' />
						</IconButton>
					</React.Fragment>
				}
			/>
		</React.Fragment>
	);
}
