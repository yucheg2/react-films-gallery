import React from 'react';
import Film from '../film/film';
import PropTypes from 'prop-types';
import './styles.css';

const Films = ({films, onFavorite}) => (<div className='films'>
	{films.map(film => (
		<Film {...film} key={film.id} onFavorite={onFavorite}/>
	))}
</div>);

Films.propTypes = {
	onFavorite: PropTypes.func.isRequired,
	films: PropTypes.array.isRequired,
};

export default Films;
