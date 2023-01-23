const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (i = 0; i < 2; i++) { 
    lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    ratingLastFilm = prompt('На сколько оцените его?', '');
    if (lastFilm != null && ratingLastFilm != null && lastFilm != '' && ratingLastFilm != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = ratingLastFilm;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Вы не любите фильмы')
} else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы хороший зритель')
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
} else {
    console.log('Error')
}