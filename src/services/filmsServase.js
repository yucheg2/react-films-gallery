import {filmsMock} from '../api/filmsMock';
import localStorageService from './localStorageService';

class FilmsService {
	fetchFilms() {
		const filmsInLocalStorage = localStorageService.getFilms();

		const filmsNotFavorite = filmsMock.filter(film =>
			!filmsInLocalStorage.find(filmInLC => film.id === filmInLC.id));

		console.log(filmsNotFavorite);
		return [...filmsInLocalStorage, ...filmsNotFavorite];
	}

	fetchFavoriteFilms() {
		return localStorageService.getFilms();
	}
}

export default new FilmsService();
