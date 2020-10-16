import React, { createContext } from 'react';
import Todo from './Todo/Todo';
import A from './Context/A';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Api from './Api/Api';
import Params from './Params/Params';
import UseLocation from './Location/UseLocationEx';
import A404 from './A404';
import { Switch, Route } from 'react-router-dom';
import SearchComponent from './Search/SearchBox';

const ComName = createContext();

const App = () => {
	return (
		<Container>
			<Header />
			<ComName.Provider value={'This is Class C'}>
				<Switch>
					<Route exact path='/params/:first/:second' component={Params} />
					<Route exact path='/todo' component={Todo} />
					<Route exact path='/api' component={Api} />
					<Route exact path='/search' component={SearchComponent} />
					<Route exact path='/location' component={UseLocation} />

					{/* Component - Load new */}
					<Route exact path='/' component={A} />
					{/* Render - Load new when something updated */}
					<Route exact path='/' render={A} />

					<Route component={A404} />
				</Switch>
			</ComName.Provider>
		</Container>
	);
};

export default App;
export { ComName };
