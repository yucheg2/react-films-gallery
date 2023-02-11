import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const Navigation = () => (<nav className='navigation'>
	<Link to={'/'}>AllFilmsPage</Link>
	<Link to={'/favorite-films'}>FavoriteFilmsPage</Link>
</nav>);

export default Navigation;
