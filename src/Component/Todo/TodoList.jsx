import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {
	return (
		<List>
			<ListItem>
				<ListItemText primary={props.item} />
				<ListItemSecondaryAction>
					<IconButton
						edge='end'
						aria-label='delete'
						onClick={() => {
							return props.onDelete(props.itemKey);
						}}
					>
						<DeleteIcon color='error' />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	);
};

export default TodoList;
