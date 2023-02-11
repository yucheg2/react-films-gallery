import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {ReactComponent as HeartOutlineIcon} from '../../api/icons/heart.svg';
import {ReactComponent as HeartFillIcon} from '../../api/icons/heart-fill.svg';

const Film = ({imgUrl, movieName, releaseYear, onFavorite, isFavourite, id}) => (
	<div className='film'>
		<img src={'/' + imgUrl} alt='loading' className='film__poster'/>
		<div className='film__name'>{movieName}</div>
		<div className='film__yer'>{releaseYear}</div>
		<div
			className='film__favourite-button'
			onClick={() => onFavorite(id)}
		>
			{isFavourite ? <HeartFillIcon/> : <HeartOutlineIcon/>}
		</div>
	</div>);

Film.propTypes = {
	id: PropTypes.number,
	movieName: PropTypes.string,
	imgUrl: PropTypes.string,
	releaseYear: PropTypes.number,
	onFavorite: PropTypes.func,
	isFavourite: PropTypes.bool,
};

export default Film;
