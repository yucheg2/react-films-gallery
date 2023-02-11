import {useEffect, useState} from 'react';
import filmsServase from '../services/filmsServase';

const useFetchFilms = () => {
	const [films, setFilms] = useState([]);
	useEffect(() => {
		setFilms(filmsServase.fetchFilms());
	}, []);

	return {films, setFilms};
};

export default useFetchFilms;
