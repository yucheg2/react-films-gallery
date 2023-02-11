import React from 'react';
import Films from '../../components/films/films';
import useFetchFilms from '../../hooks/useFetchFilms';
import MainPageLayouts from '../../layouts/MainPageLayouts/mainPageLayouts';
import localStorageService from '../../services/localStorageService';

const AllFilmsPage = () => {
	const {films, setFilms} = useFetchFilms();

	const handleFavorite = id => {
		const foundedByIdFilm = films.find(film => film.id === id);

		localStorageService.toggleFilm(foundedByIdFilm);

		const updatedFilms = films.map(film => (
			film.id === id
				? {...film, isFavourite: !foundedByIdFilm.isFavourite}
				: film
		));

		setFilms(updatedFilms);
	};

	return (<MainPageLayouts title='AllFilmsPage'>
		<Films films={films} onFavorite={handleFavorite}/>
	</MainPageLayouts>);
};

export default AllFilmsPage;
