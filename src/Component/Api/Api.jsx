import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const Api = () => {
	const [Pokemon, setPokemon] = useState({ name: 'Default name', moves: 0 });
	const [selectPokemon, setSelectPokemon] = useState(1);

	const handleChange = (event) => {
		setSelectPokemon(event.target.value);
	};

	useEffect(() => {
		const getPokemonList = async () => {
			return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${selectPokemon}`);
		};
		let response = getPokemonList();
		response.then((result) => {
			console.log(result);
			setPokemon(() => {
				return {
					name: result.data.name,
					moves: result.data.moves.length,
				};
			});
		});
	}, [selectPokemon]);

	return (
		<React.Fragment>
			<Box mt={2}>
				<Card variant='outlined'>
					<CardContent>
						<Typography variant='h5' component='h2'></Typography>
						<Typography color='textSecondary'>Pokemon API Introduction</Typography>
						<Typography variant='body2' component='p'>
							{Pokemon.name} with moves {Pokemon.moves}
						</Typography>
						<FormControl>
							<InputLabel id='demo-simple-select-label'>Age</InputLabel>
							<Select labelId='demo-simple-select-label' id='demo-simple-select' value={selectPokemon} onChange={handleChange}>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
							</Select>
						</FormControl>
					</CardContent>
				</Card>
			</Box>
		</React.Fragment>
	);
};

export default Api;
