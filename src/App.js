import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import AllFilmsPage from './page/allFilmsPage/allFilms';
import FavoriteFilmsPage from './page/favoritFilmsPage/favoriteFilms';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Switch>
					<Route path={'/favorite-films'} component={FavoriteFilmsPage}/>
					<Route path={'/'} component={AllFilmsPage}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
