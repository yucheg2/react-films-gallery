import React from 'react';
import useFetchFilms from '../../hooks/fetchFavoritFilms';
import MainPageLayouts from '../../layouts/MainPageLayouts/mainPageLayouts';
import Films from '../../components/films/films';
import localStorageService from '../../services/localStorageService';

const FavoriteFilmsPage = () => {
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

	return (<MainPageLayouts title='FavoriteFilmsPage'>
		<Films films={films} onFavorite={handleFavorite}/>

	</MainPageLayouts>);
};

export default FavoriteFilmsPage;
