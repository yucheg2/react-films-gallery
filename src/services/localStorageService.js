const USERS = 'users';

class LocalStorageService {
	setFilm(films) {
		const usersInLocalStorage = this.getFilms();
		const found = usersInLocalStorage.find(f => f.id === films.id);

		if (!found) {
			this.setFilms([...usersInLocalStorage, {...films, isFavourite: true}]);
		}
	}

	getFilms() {
		const films = localStorage.getItem(USERS);
		return JSON.parse(films) || [];
	}

	setFilms(films) {
		localStorage.setItem(USERS, JSON.stringify(films));
	}

	removeFilm(film) {
		const films = this.getFilms();
		const filteredFilms = films.filter(f => (f.id !== film.id));
		this.setFilms(filteredFilms);
	}

	toggleFilm(film) {
		if (film.isFavourite) {
			this.removeFilm(film);
		} else {
			this.setFilm(film);
		}
	}
}

export default new LocalStorageService();
